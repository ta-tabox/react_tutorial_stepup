import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { UserCard } from "./components/atoms/organisms/UserCard";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

const user = {
  name: "tata",
  image: "https://source.unsplash.com/yMSecCHsIBc",
  email: "test@example.com",
  phone: "0123-44-5555",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
