import Vue from 'vue';
import jsdom from 'jsdom';
import Skills from '../src/components/Skills.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for SkillsComponent', () => {

  let errorThrown = false;
  Vue.config.errorHandler = function (err, vm, info) {
    console.log(info);
    if(info.includes('mounted')) {
      errorThrown = true;
    }
  };

  const ClonedComponent = Vue.extend(Skills);
  const NewComponent = new ClonedComponent({
    computed: {
      content() {
        let content = {
            title: 'MY SPECIALTY',
            caption: 'MY SKILLS',
            description: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.',
            skills: [
              { name: 'Photoshop', progress: '75', color: 'progress-bar color-1' },
              { name: 'jQuery', progress: '90', color: 'progress-bar color-2' },
              { name: 'HTML5', progress: '99', color: 'progress-bar color-3' },
              { name: 'WordPress', progress: '50', color: 'progress-bar color-4' },
              { name: 'CSS3', progress: '50', color: 'progress-bar color-5' },
              { name: 'SEO', progress: '50', color: 'progress-bar color-6' },
            ]
          }

        return content;
      }
    }
  }).$mount();


  it('should have an <span> tag when title is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const title = dom.window.document.querySelector('span');
      expect(title.textContent).toContain('MY SPECIALTY');
    });
  });

  it('should have an <h2> tag when caption is passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const caption = dom.window.document.querySelector('h2');
      expect(caption.textContent).toContain('MY SKILLS');
    });
  });

  it('should have six ability tag when skills object are passed', () => {
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const ability = dom.window.document.querySelectorAll('.progress');
      expect(ability.length).toBe();
    });
  });

});
