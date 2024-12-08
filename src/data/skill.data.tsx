import {
  AngularIcon,
  BootstrapIcon,
  CssIcon,
  DjangoIcon,
  ExpressIcon,
  HtmlIcon,
  IonicIcon,
  JavaIcon,
  JsIcon,
  NestJsIcon,
  NextJsIcon,
  PostgresIcon,
  PythonIcon,
  ReactJsIcon,
  SpringIcon,
  SqlIcon,
  TailwindIcon,
  DockerIcon,
} from '@/components/icons';
import { ISkillItem } from '@/domain/interfaces/skill-item.interface';

export const skillItems: ISkillItem[] = [
  {
    label: 'HTML',
    icon: <HtmlIcon size={100} />,
    text: 'html-text',
  },
  {
    label: 'CSS',
    icon: <CssIcon size={100} />,
    text: 'css-text',
  },
  {
    label: 'JS',
    icon: <JsIcon size={80} />,
    text: 'js-text',
  },
  {
    label: 'ANGULAR',
    icon: <AngularIcon size={120} />,
    text: 'angular-text',
  },
  {
    label: 'REACT.JS',
    icon: <ReactJsIcon size={100} />,
    text: 'react-text',
  },
  {
    label: 'NEST.JS',
    icon: <NestJsIcon size={100} />,
    text: 'nest-text',
  },
  {
    label: 'NEXT.JS',
    icon: <NextJsIcon size={110} />,
    text: 'next-text',
  },
  {
    label: 'EXPRESS.JS',
    icon: <ExpressIcon size={100} />,
    text: 'express-text',
  },
  {
    label: 'IONIC',
    icon: <IonicIcon size={110} />,
    text: 'ionic-text',
  },
  {
    label: 'BOOTSTRAP',
    icon: <BootstrapIcon size={120} />,
    text: 'bootstrap-text',
  },
  {
    label: 'TAILWIND',
    icon: <TailwindIcon size={100} />,
    text: 'tailwind-text',
  },
  {
    label: 'PYTHON',
    icon: <PythonIcon size={100} />,
    text: 'python-text',
  },
  {
    label: 'DJANGO',
    icon: <DjangoIcon size={100} />,
    text: 'django-text',
  },
  {
    label: 'JAVA',
    icon: <JavaIcon size={100} />,
    text: 'java-text',
  },
  {
    label: 'SPRING BOOT',
    icon: <SpringIcon size={110} />,
    text: 'spring-text',
  },
  {
    label: 'POSTGRES',
    icon: <PostgresIcon size={100} />,
    text: 'postgres-text',
  },
  {
    label: 'SQL',
    icon: <SqlIcon size={100} />,
    text: 'sql-text',
  },
  {
    label: 'DOCKER',
    icon: <DockerIcon size={100} />,
    text: 'docker-text',
  },
];
