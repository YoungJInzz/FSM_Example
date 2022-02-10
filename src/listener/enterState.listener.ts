import { EnterStateEvent, OnEnterState } from '@depthlabs/nestjs-state-machine';
import { ProjectState, PROJECT_GRAPH } from '../constants';
import { Project } from '../project.model';

export class EnterStateListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnEnterState(PROJECT_GRAPH, ProjectState.IN_PROGRESS, true)
  async handle(event: EnterStateEvent<Project>) {
    console.log('run OnEnterState ');
    // Send emails to all users in team
  }
}
