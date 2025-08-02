import { BookOpen } from "lucide-react";
import type { ComponentProps, PropsWithChildren } from "react";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background-primary">
      {/* 헤더 */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm color-background-primary sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r bg-red-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">항해플러스 6기</h1>
                  <p className="text-xs text-slate-400">수강생 커뮤니티</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withBaseLayout<T extends (...args: any[]) => any>(Component: T) {
  return function WrappedComponent(props: ComponentProps<T>) {
    return (
      <BaseLayout>
        <Component {...props} />
      </BaseLayout>
    );
  };
}
