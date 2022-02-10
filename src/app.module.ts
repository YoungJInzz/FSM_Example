import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StateMachineModule } from '@depthlabs/nestjs-state-machine';
import { PROJECT_GRAPH, ProjectState, ProjectTransition } from './constants';
import { Project } from './project.model';
import { ProjectCantBeNamedBlockmeGuard } from './fsm.guard';
import {
  AnnounceTransitionsListener,
  BeginTransitionListener,
  CompletedTransitionListener,
  EnteredStateListener,
  EnterStateListener,
  LeaveStateListener,
} from './listener';

@Module({
  imports: [
    StateMachineModule.forRoot([
      {
        name: PROJECT_GRAPH,
        initialState: ProjectState.NEW,
        states: [ProjectState.NEW, ProjectState.IN_PROGRESS, ProjectState.DONE],
        transitions: [
          {
            name: ProjectTransition.START,
            from: [ProjectState.NEW],
            to: ProjectState.IN_PROGRESS,
          },
          {
            name: ProjectTransition.FINISH,
            from: [ProjectState.IN_PROGRESS],
            to: ProjectState.DONE,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    Project,
    ProjectCantBeNamedBlockmeGuard,
    AnnounceTransitionsListener,
    BeginTransitionListener,
    CompletedTransitionListener,
    EnteredStateListener,
    EnterStateListener,
    LeaveStateListener,
  ],
})
export class AppModule {}
