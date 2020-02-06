import styled from 'styled-components';

export const ContainerTextCartBlog = styled.div`
    text-align: left;
        position: relative;
    & > div {
        
        background: #2C3E50;
        font-size: 12px;
        color: white;
        padding: 6px 25px;
        position: absolute;
        top:0 ;
        transform: translateY(-50%);
    }
    h3 {
        color: #2C3E50;
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
        margin-top: 40px;
        margin-bottom: 5px;

    }
    p {
        color: #2C3E50;
        opacity: .6;
        font-size: 12px;
        line-height: 24px;
    }
    span {
        color: #2C3E50;
        cursor: pointer;
        text-decoration: underline;

    }
`;