import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

const BarberDetailPage = () => {
  const router = useRouter();
  // const ctx = useContext(AuthContext);
  const username = router.query.user;

  return (
    <div>
      <DashboardContainer>
        <DashboardSection>
          <h2> {username || 'Jon doe'} </h2>

        </DashboardSection>
      </DashboardContainer>
    </div>
  );
};

export default BarberDetailPage;

const DashboardContainer = styled("div")`
  height: 100vh;
  background: #f6f8fb40;
`;
const DashboardSection = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 100%;
  background: #f6f8fb40;
`;
