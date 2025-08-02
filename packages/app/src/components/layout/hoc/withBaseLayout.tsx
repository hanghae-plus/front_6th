import type { ComponentProps } from "react";
import { BaseLayout } from "../BaseLayout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withBaseLayout<T extends (...args: any[]) => any>(title: string, Component: T) {
  return function WrappedComponent(props: ComponentProps<T>) {
    return (
      <BaseLayout title={title}>
        <Component {...props} />
      </BaseLayout>
    );
  };
}
