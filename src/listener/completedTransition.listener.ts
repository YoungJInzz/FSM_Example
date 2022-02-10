import {
  CompletedTransitionEvent,
  OnCompletedTransition,
} from '@depthlabs/nestjs-state-machine';
import { ProjectTransition, PROJECT_GRAPH } from '../constants';
import { Project } from '../project.model';

export class CompletedTransitionListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnCompletedTransition(PROJECT_GRAPH, ProjectTransition.START, true)
  async handle(event: CompletedTransitionEvent<Project>) {
    console.log('run OnCompletedTransition ');
    // Send emails to all users in team
  }
}
