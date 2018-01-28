
/* 
* this function will be part of the component DeviceIcon
*/
function getIcon(type, service, power) {
    return (`types-${type}--${service ? 'service' : ''}-${power ? 'power' : ''}-.svg`);
}

test('Device Icon with both service and power false', () => {
  expect(getIcon('pool', false, false)).toBe('types-pool----.svg');
});

test('Device Icon with service true and power false', () => {
    expect(getIcon('pool', true, false)).toBe('types-pool--service--.svg');
});

test('Device Icon with service false and power true', () => {
    expect(getIcon('pool', false, true)).toBe('types-pool---power-.svg');
});

test('Device Icon with both service and power true', () => {
    expect(getIcon('pool', true, true)).toBe('types-pool--service-power-.svg');
});