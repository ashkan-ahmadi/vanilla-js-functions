/**
 * Sets the disabled state of all elements within a given form.
 *
 * @important Disable elements AFTER getting their value. Disabled elements' value cannot be read unlike readonly elements
 * @param {HTMLFormElement} form - The form whose elements' disabled state will be set.
 * @param {boolean} isDisabled - If true, disables all form elements; if false, enables them.
 *
 * @example
 * // To disable all elements in a form:
 * setFormDisabledState(myForm, true);
 *
 * // To enable all elements in a form:
 * setFormDisabledState(myForm, false);
 */
export function setFormDisabledState(form, isDisabled) {
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = isDisabled
  }
}
