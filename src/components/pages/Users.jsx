import styled from "styled-components";
import { UserCard } from "../atoms/organisms/UserCard";
import { SearchInput } from "../molecules/SearchInput";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `tata-${val}`,
    image: "https://source.unsplash.com/yMSecCHsIBc",
    email: "test@example.com",
    phone: "0123-44-5555",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
