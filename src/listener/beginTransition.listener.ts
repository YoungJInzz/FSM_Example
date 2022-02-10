import {
  BeginTransitionEvent,
  OnBeginTransition,
} from '@depthlabs/nestjs-state-machine';
import { ProjectTransition, PROJECT_GRAPH } from '../constants';
import { Project } from '../project.model';

export class BeginTransitionListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnBeginTransition(PROJECT_GRAPH, ProjectTransition.START, true)
  async handle(event: BeginTransitionEvent<Project>) {
    console.log('run OnBeginTransition ');
    // Send emails to all users in team
  }
}
