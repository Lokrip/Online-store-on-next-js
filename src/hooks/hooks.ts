export function useAttachSubComponents<
  C extends React.ComponentType<any>,
  O extends Record<string, React.ComponentType<any>>
>(displayName: string, topLevelComponent: C, otherComponents: O): C & O {
  topLevelComponent.displayName = displayName;
  Object.values(otherComponents).forEach(
    (component) =>
      (component.displayName = `${displayName}.${component.displayName}`)
  );

  return Object.assign(topLevelComponent, otherComponents);
}


export function useCorrectClass(write_class: string, className: string | undefined) {
  return className ? `${className} ${write_class}` : write_class;
}

export function useCorrectUrlImage(url: string) {
  if (url[0] === '/') {
    url = url.slice(1);
  }
  
  return `http://127.0.0.1:8000/${url}`
}
