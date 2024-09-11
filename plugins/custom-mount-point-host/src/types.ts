import { ScalprumComponentProps } from '@scalprum/react-core';
import { Entity } from '@backstage/catalog-model';

type ScalprumMountPointConfigBase = {
  layout?: Record<string, string>;
  props?: Record<string, any>;
};

export type ScalprumMountPointConfig = ScalprumMountPointConfigBase & {
  if: (e: Entity) => boolean;
};

export type ScalprumMountPointConfigRawIf = {
  [key in 'allOf' | 'oneOf' | 'anyOf']?: (
    | {
        [key: string]: string | string[];
      }
    | Function
  )[];
};

export type ScalprumMountPointConfigRaw = ScalprumMountPointConfigBase & {
  if?: ScalprumMountPointConfigRawIf;
};

export type ScalprumMountPoint = {
  Component: React.ComponentType<React.PropsWithChildren>;
  config?: ScalprumMountPointConfig;
  staticJSXContent?: React.ReactNode;
};

export type MountPoints = Record<string, ScalprumMountPoint[]>;

export type DynamicModuleEntry = Pick<
  ScalprumComponentProps,
  'scope' | 'module'
>;

export type ResolvedDynamicRouteMenuItem =
  | {
      text: string;
      icon: string;
    }
  | {
      Component: React.ComponentType<any>;
      config: {
        props?: Record<string, any>;
      };
    };

export type ResolvedMenuItem = {
  name: string;
  title: string;
  icon?: string;
  children?: ResolvedMenuItem[];
  to?: string;
  priority?: number;
};

export type ResolvedDynamicRoute = DynamicModuleEntry & {
  path: string;
  menuItem?: ResolvedDynamicRouteMenuItem;
  Component: React.ComponentType<any>;
  staticJSXContent?: React.ReactNode;
  config: {
    props?: Record<string, any>;
  };
};

export type EntityTabOverrides = Record<
  string,
  { title: string; mountPoint: string }
>;

export type ScaffolderFieldExtension = {
  scope: string;
  module: string;
  importName: string;
  Component: React.ComponentType<{}>;
};

export type DynamicRootConfig = {
  dynamicRoutes: ResolvedDynamicRoute[];
  entityTabOverrides: EntityTabOverrides;
  mountPoints: MountPoints;
  menuItems: ResolvedMenuItem[];
  scaffolderFieldExtensions: ScaffolderFieldExtension[];
};

export type ScalprumApiHolder = {
  dynamicRootConfig: Omit<
    DynamicRootConfig,
    | 'dynamicRoutes'
    | 'entityTabOverrides'
    | 'menuItems'
    | 'scaffolderFieldExtensions'
  >;
  [key: string]: any;
};
