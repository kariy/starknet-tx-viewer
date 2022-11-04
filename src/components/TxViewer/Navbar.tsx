import styled from "styled-components";

const Container = styled.nav`
    height: 60px;
    border: 1px solid blue;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    border: 1px solid red;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchForm = styled.form`
    border: 1px solid seashell;
    /* min-width: min-content; */
    min-width: 400px;
`;

function Navbar() {
    return (
        <Container>
            <Logo>
                <div>starknet teleskop</div>
            </Logo>
            <SearchForm />
        </Container>
    );
}

export default Navbar;
