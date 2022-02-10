import {
  EnteredStateEvent,
  OnEnteredState,
} from '@depthlabs/nestjs-state-machine';
import { ProjectState, PROJECT_GRAPH } from '../constants';
import { Project } from '../project.model';

export class EnteredStateListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnEnteredState(PROJECT_GRAPH, ProjectState.IN_PROGRESS, true)
  async handle(event: EnteredStateEvent<Project>) {
    console.log('run OnEnteredState ');
    // Send emails to all users in team
  }
}
