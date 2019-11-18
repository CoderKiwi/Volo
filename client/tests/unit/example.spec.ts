import {shallowMount} from '@vue/test-utils';
import MediaTile from '@/components/MediaTile.vue';
import Movie from '@/models/Movie';
import Ids from '@/models/Ids';

describe.skip('MediaTile.vue', () => {
  it('renders media tile caption when passed', () => {
    const msg = 'new message';
    const movie: Movie = new Movie('Deadpool', 2016, new Ids(190430, 'deadpool-2016', 'tt1431045', 293660));
    const wrapper = shallowMount(MediaTile, {
      propsData: {
        title: movie.title,
        year: movie.year,
        // imgSourceUri: movie.thumb,
      },
    });
    expect(wrapper.text()).toMatch(`${movie.title} (${movie.year})`);
  });
});
