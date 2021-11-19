import { create } from 'react-test-renderer';
import ProfileStatusOldCC from './ProfileStatus_old_CC';
// import { updateStatus } from '../../../redux/profile-reducer';

describe('ProfileStatusWithHooks component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatusOldCC status='chernykh.ru' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('chernykh.ru');
  });

  test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatusOldCC status='chernykh.ru' />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test(`after creation <input> shouldn't be displayed`, () => {
    const component = create(<ProfileStatusOldCC status='chernykh.ru' />);
    const root = component.root;
    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });

  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatusOldCC status='chernykh.ru' />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('chernykh.ru');
  });

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatusOldCC status='chernykh.ru' />);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onDoubleClick();
    const input = root.findByType('input');
    expect(input.props.value).toBe('chernykh.ru');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatusOldCC status='chernykh.ru' updateStatus={mockCallback} />,
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
