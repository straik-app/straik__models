export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'DELETE';

export interface RouteOptions {
  version?: string;
  idColumn?: string;
  suffix?: string;
  method?: Method;
}

export interface Route {
  resource: string;
  version: string;
  method: Method;
  path: string;
  label: string;
}

/**
 * Builds a Route object
 *
 * @param resource
 * @param options
 */
export const RouteBuilder = (resource: string, options: RouteOptions = {}): Route => {
  const version = options.version || 'v1';

  const components = [
    '',
    version,
    resource,
  ];

  if (options.idColumn) {
    components.push(`:${options.idColumn}`);
  }

  if (options.suffix) {
    components.push(options.suffix);
  }

  return {
    resource,
    version,
    method: options.method || 'GET',
    path: components.join('/'),

    /**
     * Generates a label for the route
     */
    get label() {
      return `${this.method} ${this.path}`;
    },
  };
};

/**
 * Builds a Retrieve Route object
 *
 * @param resource
 * @param options
 */
export const RetrieveRoute = (resource: string, options: RouteOptions = {}): Route => {
  return RouteBuilder(resource, { idColumn: 'uuid', ...options });
};

/**
 * Builds a List Route object
 *
 * @param resource
 * @param options
 */
export const ListRoute = (resource: string, options: RouteOptions = {}): Route => {
  return RouteBuilder(resource, options);
};

/**
 * Builds a Create Route object
 *
 * @param resource
 * @param options
 */
export const CreateRoute = (resource: string, options: RouteOptions = {}): Route => {
  return RouteBuilder(resource, { method: 'POST', ...options });
};

/**
 * Builds an Update Route object
 *
 * @param resource
 * @param options
 */
export const UpdateRoute = (resource: string, options: RouteOptions = {}): Route => {
  return RouteBuilder(resource, { method: 'PATCH', idColumn: 'uuid', ...options });
};

/**
 * Builds a Destroy Route object
 *
 * @param resource
 * @param options
 */
export const DestroyRoute = (resource: string, options: RouteOptions = {}): Route => {
  return RouteBuilder(resource, { method: 'DELETE', idColumn: 'uuid', ...options });
};

/**
 * Straik REST API Routes
 */
export const Routes = {
  home: {
    resource: '',
    version: 'v1',
    method: 'GET',
    path: '/',
    label: 'GET /',
  },
  activities: {
    retrieve: RetrieveRoute('activities'),
    list: ListRoute('activities'),
    create: CreateRoute('activities'),
    update: UpdateRoute('activities'),
    destroy: DestroyRoute('activities'),
  },
  spaces: {
    retrieve: RetrieveRoute('spaces'),
    list: ListRoute('spaces'),
    create: CreateRoute('spaces'),
    update: UpdateRoute('spaces'),
    destroy: DestroyRoute('spaces'),
  },
  status: {
    retrieve: RouteBuilder('status'),
  },
  tags: {
    retrieve: RetrieveRoute('tags'),
    list: ListRoute('tags'),
    create: CreateRoute('tags'),
    update: UpdateRoute('tags'),
    destroy: DestroyRoute('tags'),
  },
  users: {
    retrieve: RetrieveRoute('users'),
    list: ListRoute('users'),
    auth: RouteBuilder('users', { suffix: 'auth', method: 'POST' }),
    update: UpdateRoute('users'),
    destroy: DestroyRoute('users'),
  },
};
