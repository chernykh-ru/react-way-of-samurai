import Paginator from './Paginator';
import { create } from 'react-test-renderer';

describe('Paginator component test', () => {
  test('page count is 11 but should be showed only 10', () => {
    const component = create(
      <Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={10} />,
    );
    const root = component.root;
    const spans = root.findAllByType('span');
    expect(spans.length).toBe(10);
  });

  test('if pages count is more then 10 buttons PREV and NEXT should be present', () => {
    const component = create(<Paginator currentPage={10} totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    const button = root.findAllByType('button');
    // expect(button).not.toBeNull();
    expect(button.length).toBe(2);
  });
});
