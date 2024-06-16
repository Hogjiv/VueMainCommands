 
import { createMemoryHistory, createRouter } from 'vue-router'
import PropsDecomposited from '../components/PropsDecomposited.vue';
import propsSimple from '../components/propsSimple.vue';
import EventEmit from '../components/EventEmit.vue';
import VModel from '../components/VModel.vue';
import SlotImplementation from '../components/SlotImplementation.vue';
import VFor from '../components/VFor.vue';
import RefComponent from '../components/RefComponent.vue';
import BindingComponent from '../components/BindingComponent.vue';

const routes = [
    {
      path: '/props',
      name: 'props',
      component: PropsDecomposited
    },
    {
      path: '/simple',
      name: 'simple',
      component: propsSimple
    },
    {
      path: '/eventemit',
      name: 'eventemit',
      component: EventEmit
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: VModel
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotImplementation
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: VFor
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefComponent
    },
    {
      path: '/binding',
      name: 'binding',
      component: BindingComponent
    },
  ]
  export default createRouter({
    history: createMemoryHistory(),
    routes,
  });