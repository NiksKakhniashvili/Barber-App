import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const list = [
  { name: 'იაკობი', surname: 'doe', price: 40, email: 'jon@gmail.com' },
  { name: 'გოდერძი', surname: 'doe ', price: 40, email: 'jon@gmail.com' },
  { name: 'რამაზი', surname: 'doe ', price: 40, email: 'jon@gmail.com' },
  { name: 'ნოდარი', surname: 'doe ', price: 50, email: 'jon@gmail.com' },
  { name: 'ლაურა', surname: 'doe ', price: 60, email: 'laura@gmail.com' },
  { name: 'ასლანი', surname: 'doe', price: 10, email: 'oniani@gmail.com' },
]

const BarberAppHomePage = () => {
  const router = useRouter();

  const renderBarbersList = () =>
    list.map((i, idx) => {
      return (
        <BarberItem
          style={{
            backgroundColor: "white",
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          key={idx}
        >
          <div style={{ alignItems: "center", gap: "1rem", display: "flex" }}>
            <p
              style={{
                color: "black",
                width: "200px",
                margin: 0,
                marginBottom: "5px",
              }}
            >
              {i.name} {i.surname}
            </p>
          </div>
          <p
            style={{
              color: "black",
              margin: 0,
            }}
          >
            {i.email}
          </p>
          <p
            style={{
              margin: 0,
            }}
          >
              <p
                style={{ margin: '0 30px', color: "black" }}
                >ფასი</p> <br/>
            <p style={{ margin: '0 30px', fontWeight: 'bold', color: '#61bb84' }}>{i.price} ლარი</p>
          </p>
          <Title1
            style={{
              fontSize: "0.8rem",
              color: "white",
              background: "rgb(99 73 209)",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "12px",
            }}
            onClick={() => router.push(`/home/${i.name + ' ' + i.surname}`)}
          >
            {"დეტალები"}
          </Title1>
        </BarberItem>
      );
    });

  return (
    <BarberList>
      <>
        <HeaderWrapper>
          <StyledTitle>ბარბერები</StyledTitle>
        </HeaderWrapper>
        {renderBarbersList()}
      </>
    </BarberList>
  );
};

export default BarberAppHomePage;

const BalanceTitle = styled("h1")`
  font-size: 14px;
  text-align: center;
  color: #798ba3;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const HeaderWrapper = styled("div")`
  display: block;
  margin-bottom: 20px;
`;
const Title1 = styled("h1")`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;
const BarberList = styled("ul")`

  list-style: none;
  width: 80%;
  margin: 0;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;
const BarberItem = styled("li")`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin: 10px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 15px;
    color: #547cb1;
    margin-left: 60px;
  }
`;

const StyledHeader = styled("div")`
  border-radius: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
    font-size: 15px;
    color: #212529;
  }
`;

const StyledTitle = styled("h2")`
  color: rgb(168, 177, 191);
  font-size: 16px;
`;
