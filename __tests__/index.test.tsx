import { render } from "@testing-library/react";
import Home from "@pages/index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { NextPage } from "next";

const IndexRender: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

describe("index", () => {
  it("render test", () => {
    const { container } = render(<IndexRender />);

    // 테스트 성공 확인
    // expect(container).toHaveTextContent("테스트");

    // 테스트 실패 확인
    expect(container).toHaveTextContent("테스트@@");
  });
});
