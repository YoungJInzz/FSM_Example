import { GuardEvent, OnGuard } from '@depthlabs/nestjs-state-machine';
import { ProjectTransition, PROJECT_GRAPH } from './constants';
import { Project } from './project.model';

export class ProjectCantBeNamedBlockmeGuard {
  // Graph name in first argument, transition name in second
  @OnGuard(PROJECT_GRAPH, ProjectTransition.START)
  handle(event: GuardEvent<Project>) {
    // event.subject is our Project instance
    if (event.subject.name == 'blockme') {
      // if name isn't allowed for some reasons
      event.setBlocked('transition-blocked'); // block transition using setBlocked() method
    }
  }
}
