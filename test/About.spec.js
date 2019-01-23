import Vue from 'vue';
import jsdom from 'jsdom';
import About from '../src/components/About.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for AboutComponent', () => {

  let errorThrown = false;
  Vue.config.errorHandler = function (err, vm, info) {
    console.log(info);
    if(info.includes('mounted')) {
      errorThrown = true;
    }
  };

  const ClonedComponent = Vue.extend(About);
  const NewComponent = new ClonedComponent({
    computed: {
      content() {
        let content = {
          title: 'ABOUT US',
          caption: 'WHO AM I?',
          description: '',
          cards: [
            { name: 'Graphic Design', classes: 'icon2', color: 'services color-1', icon: 'icon-bulb' },
            { name: 'Web Design', classes: 'icon2', color: 'services color-2', icon: 'icon-globe-outline' },
            { name: 'Software', classes: 'icon2', color: 'services color-3', icon: 'icon-data' },
            { name: 'Application', classes: 'icon2', color: 'services color-4', icon: 'icon-phone3' }
          ],
          hireme: '<h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2><a href="#" class="btn-hire">Hire me</a>'
        }
        return content;
      }
    }
  }).$mount();


  it('should have an <span> tag when header is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const title = dom.window.document.querySelector('span');
      expect(title.textContent).toContain('ABOUT US');
    });
  });

  it('should have an <h2> tag when title is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const caption = dom.window.document.querySelector('h2');
      expect(caption.textContent).toContain('WHO AM I?');
    });
  });

  it('should have four cards tag when cards object are passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const cards = dom.window.document.querySelectorAll('.services');
      expect(cards.length).toBe(4);
    });
  });

  it('should have an component when hireme object is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const hiremeCard = dom.window.document.querySelectorAll('.btn-hire');
      expect(hiremeCard.length).toBe(1);
    });
  });

});
