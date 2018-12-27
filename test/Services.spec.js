import Vue from 'vue';
import jsdom from 'jsdom';
import Services from '../src/components/Services.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for ServicesComponent', () => {

  let errorThrown = false;
  Vue.config.errorHandler = function (err, vm, info) {
    console.log(info);
    if(info.includes('mounted')) {
      errorThrown = true;
    }
  };

  const ClonedComponent = Vue.extend(Services);
  const NewComponent = new ClonedComponent({
    computed: {
      services() {
        let mockObject = {
          title: 'WHAT I DO?',
          caption: 'HERE ARE SOME OF MY EXPERTISE',
          cards: [
            { cardTitle: 'INNOVATIVE IDEAS', cardColor: 'services color-1', cardIcon: 'icon-bulb', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
            { cardTitle: 'SOFTWARE', cardColor: 'services color-2', cardIcon: 'icon-data', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
            { cardTitle: 'APPLICATION', cardColor: 'services color-3', cardIcon: 'icon-phone3', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
            { cardTitle: 'GRAPHIC DESIGN', cardColor: 'services color-4', cardIcon: 'icon-layers2', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
            { cardTitle: 'SOFTWARE', cardColor: 'services color-5', cardIcon: 'icon-data', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' },
            { cardTitle: 'APPLICATION', cardColor: 'services color-6', cardIcon: 'icon-phone3', cardText: 'Separated they live in Bookmarksgrove right at the coast of the Semantics' }
          ],
          counters: [
            { title: 'CUPS OF COFFEE', amount: '309' },
            { title: 'PROJECTS', amount: '356' },
            { title: 'CLIENTS', amount: '30' },
            { title: 'PARTNER', amount: '10' }
          ]
        }
        return mockObject;
      }
    }
  }).$mount();


  it('should have an <span> tag when title is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const headingSpan = dom.window.document.querySelector('span');
      expect(headingSpan.textContent).toContain('WHAT I DO?');
    });
  });

  it('should have an <h2> tag when caption is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const headingH2 = dom.window.document.querySelector('h2');
      expect(headingH2.textContent).toContain('HERE ARE SOME OF MY EXPERTISE');
    });
  });

  it('should have six cards tag when cards object are passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const cards = dom.window.document.querySelectorAll('.services');
      expect(cards.length).toBe(6);
    });
  });

  it('should have an component when counts object is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const colorlibCounter = dom.window.document.querySelectorAll('.colorlib-counters');
      expect(colorlibCounter.length).toBe(1);
    });
  });

});
