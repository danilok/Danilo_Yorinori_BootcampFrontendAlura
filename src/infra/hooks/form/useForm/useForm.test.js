import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import useForm from './index';

const onSubmit = jest.fn();
onSubmit.mockImplementation(() => { });

const initializedHook = (initialValues) => {
  const values = initialValues || {
    field: 'value',
    field2: 'value 2',
  };
  const { result } = renderHook(() => useForm({
    initialValues: values,
    onSubmit,
  }));
  return result;
};

describe('useForm()', () => {
  describe('when initializes', () => {
    test('initial values has informed values', () => {
      const initialValues = {
        field: 'value',
        field2: 'value 3',
      };

      expect(initializedHook(initialValues).current.values)
        .toEqual(initialValues);
    });
    test('its not submitted', () => {
      expect(initializedHook().current.isFormSubmitted)
        .toBe(false);
    });
    test('fields are untouched', () => {
      expect(initializedHook().current.touchedFields)
        .toEqual({});
    });
    test('form is disabled', () => {
      expect(initializedHook().current.isFormDisabled)
        .toBe(true);
    });
  });
  describe('when user types', () => {
    test('change the value', () => {
      const initialValues = {
        field: 'value',
      };
      const result = initializedHook(initialValues);

      const event = {
        target: {
          getAttribute: () => 'field',
          value: 'new value',
        },
      };

      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.values).toEqual({ field: 'new value' });
    });
    test('change touched state', () => {
      const initialValues = {
        field: 'value',
      };
      const result = initializedHook(initialValues);

      const event = {
        target: {
          getAttribute: () => 'field',
        },
      };

      act(() => {
        result.current.handleBlur(event);
      });

      expect(result.current.touchedFields).toEqual({ field: true });
    });
  });
  describe('when submit form', () => {
    test('handleSubmit is called', () => {
      const result = initializedHook();

      const event = {
        preventDefault: () => { },
      };

      act(() => {
        result.current.handleSubmit(event);
      });

      expect(onSubmit).toBeCalledTimes(1);
    });
    test('form is set to submitted', () => {
      const result = initializedHook();

      const event = {
        preventDefault: () => { },
      };

      act(() => {
        result.current.handleSubmit(event);
      });

      expect(result.current.isFormSubmitted)
        .toBe(true);
    });
  });
  describe('when reset form', () => {
    test('form is set to not submitted', () => {
      const result = initializedHook();

      act(() => {
        result.current.handleReset({});
      });

      expect(result.current.isFormSubmitted)
        .toBe(false);
    });
    test('values are reset', () => {
      const initialValues = {
        field: 'value',
        field2: 10,
      };
      const resetValues = {
        field: '',
        field2: 0,
      };
      const result = initializedHook(initialValues);

      act(() => {
        result.current.handleReset(resetValues);
      });

      expect(result.current.values)
        .toEqual(resetValues);
    });
    test('values are untouched', () => {
      const resetValues = {
        field: 'value reset',
        field2: 0,
      };
      const result = initializedHook();

      act(() => {
        result.current.handleReset(resetValues);
      });

      expect(result.current.touchedFields)
        .toEqual({
          field: false,
          field2: false,
        });
    });
  });
});
