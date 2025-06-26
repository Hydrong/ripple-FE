import styled from "styled-components";

const CntOut = styled.div``;
const CntIn = styled.div``;
const Logo = styled.div``;
const Title = styled.div``;
const InputWrp = styled.div``;
const Input = styled.input.attrs({ type: "text" })``;

const SignUpPage = () => {
  return (
    <CntOut>
      <CntIn>
        <Logo>Ripple</Logo>
        <Title>회원 가입</Title>
        <InputWrp>
          <Input placeholder="ID" />
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호 확인" />
        </InputWrp>
      </CntIn>
    </CntOut>
  );
};

export default SignUpPage;
