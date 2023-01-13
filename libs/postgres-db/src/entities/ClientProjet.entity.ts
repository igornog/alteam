import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Availability, Difficulty, RateType, WorkType } from '@yjcapp/app'
import { SoloClientEntity } from './SoloClient.entity'

@Entity({ name: 'client_project' })
export class ClientProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @ManyToOne(() => SoloClientEntity, (soloClient) => soloClient.projects)
  soloClient: SoloClientEntity

  @Column({ type: 'varchar' })
  projectName: string

  @Column({ type: 'varchar' })
  individuals: number

  @Column({ type: 'varchar' })
  workType: WorkType

  @Column({ type: 'varchar', nullable: true })
  timeZone: string

  @Column({ type: 'varchar' })
  availability: Availability

  @Column({ type: 'text' })
  projectLength: string

  @Column({ type: 'text' })
  startDate: Date

  @Column({ type: 'text', nullable: true })
  rateType: RateType

  @Column({ type: 'text', nullable: true })
  rateFrom: number

  @Column({ type: 'text', nullable: true })
  rateTo: number

  @Column({ type: 'text' })
  difficulty: Difficulty

  @Column({ type: 'text', nullable: true })
  learningLink: string

  @Column({ type: 'text' })
  jobDescription: string

  @Column({ type: 'text' })
  skills: string[]

  @Column({ type: 'text' })
  questions: string[]
}
