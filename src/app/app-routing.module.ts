import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { ReceiveEmailCodeComponent } from './components/receive-email-code/receive-email-code.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { CourseDetailComponent } from './components/pages/course-detail/course-detail.component';
import { LeaderboardComponent } from './components/pages/leaderboard/leaderboard.component';
import { MessagingComponent } from './components/pages/messaging/messaging.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { AuthGuard } from './guards/User/user.guard';
// import { AuthGuard } from './guards/User/user.guard';
// import { AdminGuard } from './guards/Admin/admin.guard';
import { CategoryComponent } from './components/admin/category/category.component';
import { CouponComponent } from './components/admin/coupon/coupon.component';
import { CourseComponent } from './components/admin/course/course.component';
import { LessonComponent } from './components/admin/lesson/lesson.component';
import { MessageComponent } from './components/admin/message/message.component';
import { QuestionComponent } from './components/admin/question/question.component';
import { UserComponent } from './components/admin/user/user.component';
import { QuizCRUDComponent } from './components/admin/quiz-crud/quiz-crud.component';
import { UserActivityComponent } from './components/admin/user-activity/user-activity.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'register', title: 'Register', component: RegisterComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'confirm-password', title: 'ConfirmPassword', component: ConfirmPasswordComponent},
  { path: 'receive-email-code', title: 'ReceiveEmailCode', component:ReceiveEmailCodeComponent},
  
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: '', title: 'OverView', component: OverwiewComponent, canActivate: [AuthGuard]},
  { path: 'overview', title: 'OverView', component: OverwiewComponent, canActivate: [AuthGuard]},
  { path: 'schedule', title: 'Schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
  { path: 'messaging', title: 'Messaging', component: MessagingComponent, canActivate: [AuthGuard]},
  { path: 'leaderboard', title: 'Leader Board', component: LeaderboardComponent, canActivate: [AuthGuard]},
  { path: 'course-detail', title: 'Course Detail', component: CourseDetailComponent, canActivate: [AuthGuard]},
  { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'quiz', title: 'Quiz', component: QuizComponent, canActivate: [AuthGuard]},

  { path: 'courses', title: 'Courses', component: CoursesComponent, canActivate: [AuthGuard], children: [
    { path: 'progress', title: 'Progress', component: CourseDetailComponent, canActivate: [AuthGuard]},
    { path: 'upcoming', title: 'Course Detail', component: CourseDetailComponent, canActivate: [AuthGuard]},
  ]},

  { path: 'category', title: 'Category', component:CategoryComponent},
  { path: 'coupon', title: 'Cupon', component: CouponComponent},
  { path: 'course', title: 'Course', component: CourseComponent},
  { path: 'lesson', title: 'Lesson', component: LessonComponent},
  { path: 'message', title: 'Message', component: MessageComponent},
  { path: 'question', title: 'Question', component: QuestionComponent},
  { path: 'user', title: 'User', component: UserComponent},
  { path: 'quizCRUD', title: 'Quiz CRUD', component: QuizCRUDComponent},
  { path: 'userActivity', title: 'UserActivity', component: UserActivityComponent},

  
//   { path: '', title: 'OverView', component: OverwiewComponent, canActivate: [AuthGuard]},
//   { path: 'login', title: 'Login', component: RegisterComponent},
//   { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
//   { path: 'courses', title: 'Courses', component: CoursesComponent, canActivate: [AuthGuard]},
//   { path: 'schedule', title: 'Schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
//   { path: 'messaging', title: 'Messaging', component: MessagingComponent, canActivate: [AuthGuard]},
//   { path: 'leaderboard', title: 'Leader Board', component: LeaderboardComponent, canActivate: [AuthGuard]},
//   { path: 'course-detail', title: 'Course Detail', component: CourseDetailComponent, canActivate: [AuthGuard]},
//   { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthGuard]},
//   { path: 'quiz', title: 'Quiz', component: QuizComponent, canActivate: [AuthGuard]},

  { path: '**', title: 'Not Found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }