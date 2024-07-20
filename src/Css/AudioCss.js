import styled from 'styled-components';
export const StyledAudio = styled.div`
    .All {
        display: flex;
        align-items: center;
        margin: 30px;
        background-color: #e5e5e5;
    }

    .Sound-Style {
        font-weight: bold;
        display: flex;
        font-size: 25px;
        align-items: center;
        padding: 25px;
        border-radius: 5px;
    }

    .Icon-Style {
        font-size: 40px;
        margin-left: 15px;
    }

    .Slider-Style {
        width: 500px; /* 슬라이더 길이 */
        height: 20px; /* 슬라이더 두께 */
        -webkit-appearance: none; /* 기본 스타일 제거 (크롬, 사파리, 오페라) */
        appearance: none;
        background: #ccc; /* 기본 배경 색상 */
        outline: none; /* 포커스 시 아웃라인 제거 */
        border-radius: 10px; /* 슬라이더 양 끝 둥글게 */
        position: relative;
    }

    .Slider-Style::-webkit-slider-runnable-track {
        background: linear-gradient(
            to right,
            #217eff calc(var(--progress) * 100%),
            #ccc 0%
        );
        border-radius: 10px;
        height: 100%;
    }

    .Slider-Style::-moz-range-track {
        background: linear-gradient(
            to right,
            #db761d calc(var(--progress) * 100%),
            #ececec 0%
        );
        border-radius: 10px;
        height: 100%;
    }

    .Slider-Style::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 35px; /* 슬라이더 버튼 너비 */
        height: 35px; /* 슬라이더 버튼 높이 */
        background: #393939; /* 슬라이더 버튼 색상 */
        cursor: pointer; /* 커서 포인터 */
        border-radius: 50%; /* 슬라이더 버튼 둥글게 */
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .Slider-Style::-moz-range-thumb {
        width: 35px; /* 슬라이더 버튼 너비 */
        height: 35px; /* 슬라이더 버튼 높이 */
        background: #000000; /* 슬라이더 버튼 색상 */
        cursor: pointer; /* 커서 포인터 */
        border-radius: 50%; /* 슬라이더 버튼 둥글게 */
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;
