import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  //   findByTitle(title: string) {
  //     return this.findOne({ title });
  //   }
}
