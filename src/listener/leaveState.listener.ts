import { LeaveStateEvent, OnLeaveState } from '@depthlabs/nestjs-state-machine';
import { ProjectState, PROJECT_GRAPH } from '../constants';
import { Project } from '../project.model';

export class LeaveStateListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnLeaveState(PROJECT_GRAPH, ProjectState.NEW, true)
  async handle(event: LeaveStateEvent<Project>) {
    console.log('run OnLeaveState ');
    // Send emails to all users in team
  }
}
