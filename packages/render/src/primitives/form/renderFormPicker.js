import { parsePickerAndListFieldOptions } from '../../utils/parseFormOptions';

const renderFormPicker = (ctx, node) => {
    const { top, left, width, height } = node.box || {};

    // Element's name
    const name = node.props?.name || '';

    ctx.picker(name, left, top, width, height, parsePickerAndListFieldOptions(node));
};

export default renderFormPicker;
