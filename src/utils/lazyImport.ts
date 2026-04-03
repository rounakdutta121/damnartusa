import React, { lazy } from 'react';

export const lazyNamed = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ [K in string]: T }>,
  name: string
) => lazy(async () => {
  const module = await importFn();
  return { default: module[name] };
});
