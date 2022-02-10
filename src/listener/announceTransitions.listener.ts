import {
  AnnounceTransitionsEvent,
  OnAnnounceTransitions,
} from '@depthlabs/nestjs-state-machine';
import { PROJECT_GRAPH, ProjectState } from '../constants';
import { Project } from '../project.model';

export class AnnounceTransitionsListener {
  // Graph name in first argument, transition name in second. Third if truem method is async.
  @OnAnnounceTransitions(PROJECT_GRAPH, ProjectState.NEW, true)
  async handle(event: AnnounceTransitionsEvent<Project>) {
    console.log('run OnAnnounceTransitions ');
    // Send emails to all users in team
  }
}
