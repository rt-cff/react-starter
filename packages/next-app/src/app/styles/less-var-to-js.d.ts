declare module 'less-vars-to-js' {
  import lessVarToJs from 'less-vars-to-js';

  type DefaultExport = (
    template: string,
    options: {
      resolveVariables?: boolean
      dictionary?: Record<string, string>
      stripPrefix?: boolean
    }
  ) => Record<string, string>;

  const defaultExport: DefaultExport = lessVarToJs;

  export default defaultExport;
}
