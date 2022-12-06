import { Page } from '../../utils/redux/types/settings.type'
import { Tabs } from '../../utils/types'
import ClientRequestsView from './components/ClientRequests/ClientRequestsView'
import LinkedinLogo from '../../assets/images/icons/Linkedin.svg'
import { Client } from '../../utils/redux/types/clients.type'
import {
  Availability,
  Difficulty,
  ListingStatus,
  RateType,
  WorkType,
} from '../../utils/redux/types/listings.type'

export { default } from './components/ClientsView'

export const tabsClientsContent = {
  [Tabs.ClientRequests]: {
    node: <ClientRequestsView />,
    talentRightClick: [],
  },
  [Tabs.ActiveClients]: {
    node: <ClientRequestsView />,
  },
  [Tabs.InactiveClients]: {
    node: <ClientRequestsView />,
  },
  [Tabs.DeclinedRequests]: {
    node: <ClientRequestsView />,
  },
}

export const talentsTabs: Page[] = [
  {
    title: Tabs.ClientRequests,
    badge: 5,
    active: false,
    settings: {
      search: true,
      downloadCSV: true,
      displayMode: true,
      sortBy: true,
      createClient: true,
    },
    talentRightClick: [],
    clientRightClick: [],
  },
  {
    title: Tabs.ActiveClients,
    badge: 150,
    active: true,
    settings: {
      search: true,
      downloadCSV: true,
      displayMode: true,
      sortBy: true,
    },
    talentRightClick: [],
    clientRightClick: [],
  },
  {
    title: Tabs.InactiveClients,
    badge: 20,
    active: false,
    settings: {
      search: true,
      downloadCSV: true,
      displayMode: true,
      sortBy: true,
    },
    talentRightClick: [],
    clientRightClick: [],
  },
  {
    title: Tabs.DeclinedRequests,
    active: false,
    settings: {
      search: true,
      downloadCSV: true,
      displayMode: true,
      sortBy: true,
    },
    talentRightClick: [],
    clientRightClick: [],
  },
]

export const clients: Client[] = [
  {
    id: 1,
    name: 'Chaptr',
    logo: LinkedinLogo,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: Array.from(Array(2).keys()).map((key) => ({
      id: key,
      name: `Listing ${key}`,
      nbIndividual: 1,
      workType: WorkType.Remote,
      timeZone: 'GMT+2',
      availability: Availability.PartTime,
      hours: 20,
      projectLength: 6,
      startDate: new Date(),
      rateType: RateType.Fixed,
      rateFrom: 200,
      rateTo: 300,
      difficulty: Difficulty.Senior,
      learning: 'linktothevideo.com/videolink',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu. Magna sed auctor diam fringilla vestibulum eu. Magna sed auctor...',
      screeningQuestion: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
      ],
      status: ListingStatus.Active,
      received: '23.07.2022',
      assignee: 0,
      talent: [1, 2, 4, 5],
    })),
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
  {
    id: 2,
    name: 'Aviva',
    logo: undefined,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: Array.from(Array(4).keys()).map((key) => ({
      id: key,
      name: `Listing ${key}`,
      nbIndividual: 1,
      workType: WorkType.Remote,
      timeZone: 'GMT+2',
      availability: Availability.FullTime,
      projectLength: 6,
      startDate: new Date(),
      rateType: RateType.Fixed,
      rateFrom: 200,
      rateTo: 300,
      difficulty: Difficulty.Senior,
      learning: 'linktothevideo.com/videolink',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque at amet congue integer eget. At a, ante nullam tempus, mattis in aenean a. Volutpat bibendum sit egestas ultrices scelerisq...',
      screeningQuestion: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque adipiscing placerat venenatis odio vel dignissim nec diam. Tincidunt ultrices sed ut odio vestibulum nisl, id vulputate. Gravida mattis bibendum lacus lacus pulvinar egestas proin convallis. Magna sed auctor diam fringilla vestibulum eu.',
      ],
      status: ListingStatus.Active,
      received: '23.07.2022',
      assignee: 0,
    })),
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
  {
    id: 3,
    name: 'Heat',
    logo: LinkedinLogo,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: [],
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
  {
    id: 4,
    name: 'Heat',
    logo: undefined,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: [],
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
  {
    id: 5,
    name: 'Heat',
    logo: LinkedinLogo,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: [],
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
  {
    id: 6,
    name: 'Heat',
    logo: LinkedinLogo,
    received: '23.07.2022',
    industry: 'Web 3.0',
    listings: [],
    assignee: 0,
    email: 'and@chaptr.com',
    phoneNumber: '+44 1234 123456',
    companyUrl: 'chaptr.com',
  },
]
