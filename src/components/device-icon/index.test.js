// import getIcon from './index';

/* 
* this function will be part of the component DeviceIcon
*/
function getIcon(type, service, power) {
    return (`types-${type}-none-${service ? 'service' : 'none'}-${power ? 'power' : 'none'}-none.svg`);
}

test('Device Icon with both service and power false', () => {
  expect(getIcon('pool', false, false)).toBe('types-pool-none-none-none-none.svg');
});

test('Device Icon with service true and power false', () => {
    expect(getIcon('pool', true, false)).toBe('types-pool-none-service-none-none.svg');
});

test('Device Icon with service false and power true', () => {
    expect(getIcon('pool', false, true)).toBe('types-pool-none-none-power-none.svg');
});

test('Device Icon with both service and power true', () => {
    expect(getIcon('pool', true, true)).toBe('types-pool-none-service-power-none.svg');
});