import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { MydetailComponent } from './mydetail/mydetail.component';
import { ForumComponent } from './forum/forum.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { RepairComponent } from './repair/repair.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EditorComponent } from './editor/editor.component';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'userdetail', component: MydetailComponent, canActivate: [AuthGuard]},
  { path: 'forum', component: ForumComponent},
  { path: 'chat', component: ChatroomComponent, canActivate: [AuthGuard]},
  { path: 'repair', component: RepairComponent, canActivate: [AuthGuard]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard]},
  { path: 'newdetail', component: NewDetailComponent, canActivate: [AuthGuard]},
  { path: 'forumdetail', component: ForumDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
