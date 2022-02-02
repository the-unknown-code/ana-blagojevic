const load = (page) => () => import(`@/pages/${page}.vue`)

export const RouteNames = {
  HOMEPAGE: 'homepage',
  ABOUT: 'about',
  CONTACT: 'contact',
  PROJECTS: 'projects',
  PROJECT: 'project',
  NOT_FOUND: '404'
}

const routes = [
  {
    path: '',
    name: RouteNames.HOMEPAGE,
    component: load('Homepage/Homepage')
  },
  {
    path: RouteNames.ABOUT,
    name: RouteNames.ABOUT,
    component: load('About/About')
  },
  {
    path: RouteNames.CONTACT,
    name: RouteNames.CONTACT,
    component: load('Contact/Contact')
  },
  {
    path: RouteNames.PROJECTS,
    name: RouteNames.PROJECTS,
    component: load('Projects/Projects')
  },
  {
    path: `${RouteNames.PROJECT}/:id`,
    name: RouteNames.PROJECT,
    component: load('Project/Project')
  },
  {
    path: RouteNames.NOT_FOUND,
    name: RouteNames.NOT_FOUND,
    component: load('NotFound/NotFound')
  }
]

export default routes
