import { Injectable } from '@nestjs/common';
import { StateMachineFactory } from '@depthlabs/nestjs-state-machine';
import { Project } from './project.model';
import { ProjectTransition, PROJECT_GRAPH } from './constants';

@Injectable()
export class AppService {
  constructor(
    private readonly stateMachineFactory: StateMachineFactory,
    private readonly project: Project,
  ) {}

  async changeState(): Promise<string> {
    const project = this.project;
    console.log('before transition', project);
    project.name = 'test';
    const projectStateMachine = this.stateMachineFactory.create<Project>(
      project,
      PROJECT_GRAPH,
    );
    await projectStateMachine.apply(ProjectTransition.START);
    await projectStateMachine.apply(ProjectTransition.FINISH);

    console.log('after transition', project);
    return 'Hello World!';
  }
}
