import type { ComponentProps, FunctionComponent, PropsWithChildren } from "react";
import type { AnyFunction } from "@/types";
import { BaseLayout } from "../BaseLayout";

const DefaultProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export function withBaseLayout<T extends AnyFunction>(
  Component: T & { Provider?: FunctionComponent<PropsWithChildren> },
) {
  return function WrappedComponent(props: ComponentProps<T>) {
    const Provider = Component.Provider ?? DefaultProvider;
    return (
      <Provider>
        <BaseLayout>
          <Component {...props} />
        </BaseLayout>
      </Provider>
    );
  };
}
