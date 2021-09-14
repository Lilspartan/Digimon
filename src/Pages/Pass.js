import React from 'react'

const Pass = ({ gameState }) => {
    var style1 = {
        "--color": gameState[gameState.turn].color
    }

    var style2 = {
        "--color": gameState[(gameState.turn === "player1" ? "player2" : "player1")].color
    }

    return (
        <div>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Pass Animation">
                    <g id="PassText">
                        <path id="path0" fill-rule="evenodd" clip-rule="evenodd" d="M56.5955 42.0739C54.3104 42.3999 52.8611 43.9299 52.6476 46.2411C52.4069 48.8472 53.1667 50.3022 55.1871 51.1051C55.3566 51.1724 55.8349 51.3486 56.2498 51.4965C58.213 52.1964 58.6852 52.5769 58.3709 53.2059C57.81 54.3285 56.1825 54.1458 54.5352 52.7749L54.2697 52.554L53.9253 52.5625L53.5809 52.5708L52.9854 53.7274C52.6579 54.3636 52.379 54.8726 52.3655 54.8589C52.3523 54.8452 51.2843 52.0546 49.9925 48.6577C48.7008 45.2609 47.63 42.464 47.6133 42.4424C47.5582 42.3712 42.9185 42.3864 42.8804 42.4581C42.8643 42.4884 41.6334 45.7127 40.1449 49.6231L37.4385 56.7332V57.0645V57.3958L39.7565 57.3877L42.0745 57.3797L42.4975 56.146L42.9203 54.9125H45.2517H47.5832L47.8287 55.6276C47.9635 56.0207 48.1548 56.5759 48.2532 56.8611L48.4325 57.3797L50.7461 57.3877L53.0595 57.3958V57.115V56.8341L53.42 57.0055C54.829 57.6752 56.6025 57.9512 58.3557 57.7735C60.9529 57.5101 62.6189 56.0172 62.9278 53.6764C62.9785 53.2913 62.9685 51.8433 62.9125 51.4708C62.6372 49.6414 61.5935 48.6741 58.9618 47.8102C57.7292 47.4055 57.3461 47.1884 57.154 46.7858C56.9928 46.4476 57.6107 45.8915 58.235 45.8127C58.6488 45.7606 59.5963 46.1614 60.1831 46.6371L60.3136 46.7427L60.639 46.7338L60.9644 46.7249L61.6771 45.2947L62.39 43.8645L62.3843 43.5189L62.3787 43.1732L61.923 42.9458C60.3981 42.1854 58.2626 41.8358 56.5955 42.0739ZM67.1876 42.0739C64.911 42.3986 63.4525 43.9384 63.2397 46.2411C62.999 48.8472 63.7579 50.3009 65.7792 51.1053C65.9489 51.1728 66.4058 51.3412 66.7946 51.4795C68.3906 52.0471 68.7802 52.2639 68.9835 52.6967C69.2527 53.2702 68.3838 54.0428 67.5655 53.9572C66.8164 53.879 65.8411 53.3991 65.0654 52.7276L64.8642 52.5531L64.5198 52.5621L64.1754 52.5708L63.4118 54.048L62.6483 55.5254L62.647 55.8585L62.6459 56.1915L62.9524 56.3949C64.1722 57.2048 65.3802 57.638 66.799 57.7746C67.2952 57.8225 68.9769 57.8031 69.0309 57.7491C69.054 57.726 69.1516 57.7097 69.2671 57.7097C69.6626 57.7097 70.0686 57.5953 70.2666 57.428C70.4692 57.2566 70.5389 57.2185 70.6963 57.1928C70.7591 57.1823 70.8686 57.1318 70.9396 57.0804C71.0107 57.029 71.0884 56.987 71.1124 56.987C71.1363 56.987 71.2391 56.9223 71.3404 56.8432C71.4419 56.7643 71.6075 56.6557 71.7083 56.6019C71.8124 56.5461 71.9625 56.4256 72.0557 56.3226C72.1459 56.2231 72.3293 56.0549 72.4633 55.9493C72.6068 55.8362 72.7501 55.6897 72.8122 55.5927C72.8699 55.5023 72.9396 55.4098 72.9668 55.3873C73.4905 54.9526 73.7521 52.2325 73.3955 50.9306C72.9912 49.4549 71.9272 48.5863 69.589 47.8226C68.3437 47.416 67.938 47.1881 67.7471 46.788C67.5849 46.4476 68.2004 45.8917 68.8273 45.8127C69.2368 45.761 70.2082 46.1716 70.7754 46.636L70.9057 46.7427L71.2311 46.7338L71.5565 46.7249L72.2694 45.2947L72.9821 43.8645L72.9764 43.5189L72.9708 43.1732L72.5151 42.9458C70.9902 42.1854 68.8547 41.8358 67.1876 42.0739ZM27.2283 42.4006L27 42.6269L27.0185 43.513C27.0288 44.0002 27.0647 46.9093 27.0985 49.9779C27.1324 53.0463 27.1688 55.9704 27.1797 56.4762L27.1993 57.3954H29.396H31.5924V55.0247V52.6538L33.109 52.6413C34.3392 52.6311 34.6847 52.6189 34.9398 52.576C37.8391 52.0894 39.1187 49.999 38.7234 46.3947C38.5091 44.4409 37.371 43.0959 35.5298 42.6212C34.767 42.4246 34.798 42.4259 31.0596 42.4117L27.6506 42.3986L27.5537 42.2862L27.4565 42.1741L27.2283 42.4006ZM32.9799 46.1694C33.9794 46.4354 34.432 47.2768 34.0284 48.1189C33.7344 48.7325 33.0925 49.001 31.9145 49.003L31.5924 49.0034V47.5377V46.0721L32.1661 46.0888C32.6015 46.1015 32.7976 46.1209 32.9799 46.1694ZM45.8128 49.852L46.3591 51.4079L45.8139 51.4166C45.5142 51.4211 45.0161 51.4211 44.7072 51.4166L44.1457 51.4079L44.6974 49.8309C45.0008 48.9636 45.253 48.2635 45.2578 48.275C45.2626 48.2868 45.5125 48.9964 45.8128 49.852Z" fill="black" />
                    </g>
                    <g id="Arrows">
                        <g id="Arrow1">
                            <path 
                                id="path0_2" 
                                style = {style1}
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M42.6768 8.62025C41.4205 8.6875 39.768 8.82475 39.0332 8.923C37.6235 9.11125 36.081 9.3755 34.8665 9.63675C34.5888 9.6965 34.1993 9.7795 34.0008 9.8215C33.8023 9.86325 33.579 9.91325 33.5047 9.93275C33.4302 9.95225 33.3085 9.98325 33.2342 10.0012C32.9552 10.0695 32.7687 10.1185 32.5937 10.1692C31.917 10.366 31.4867 10.4895 31.3312 10.532C31.0295 10.614 29.7918 11.017 29.5995 11.0955C29.5003 11.136 29.3462 11.189 29.2567 11.2127C29.1675 11.2367 29.0132 11.2892 28.9142 11.3297C28.815 11.37 28.4335 11.5122 28.0665 11.646C27.6992 11.7797 27.3665 11.9092 27.3267 11.9335C27.2872 11.958 27.074 12.044 26.853 12.125C26.0605 12.415 24.9347 12.9227 24.0682 13.3807C24.0152 13.4087 23.8582 13.4865 23.7192 13.5532C23.5805 13.6202 23.2152 13.809 22.9077 13.9727C22.6 14.1365 22.2675 14.311 22.1682 14.3605C22.0692 14.4097 21.923 14.4935 21.8435 14.546C21.7642 14.5987 21.6422 14.6707 21.5727 14.706C21.2982 14.8455 20.3667 15.3927 19.96 15.6535C19.7775 15.7707 19.5595 15.907 19.476 15.9567C19.3925 16.0062 19.2022 16.128 19.0535 16.2272C18.9045 16.3265 18.757 16.4245 18.7257 16.4447C18.6945 16.4652 18.5735 16.5465 18.457 16.6252C18.3407 16.704 18.209 16.7927 18.1647 16.8225C18.1202 16.8522 17.9507 16.974 17.7877 17.093C17.6247 17.212 17.3425 17.4172 17.1602 17.549C16.5687 17.9765 15.5762 18.7495 14.6825 19.4792C13.7695 20.2245 12.8202 21.0967 11.6522 22.2633L10.3717 23.5425L10.2452 23.472C9.80725 23.228 9.034 22.7943 8.58575 22.5408C8.29825 22.3783 7.95725 22.1882 7.82825 22.1187C7.69925 22.0492 7.52875 21.9547 7.4495 21.9085C7.37025 21.8625 7.0455 21.68 6.728 21.503C6.4105 21.326 6.01275 21.103 5.84425 21.0075C5.6755 20.912 5.45625 20.7892 5.35725 20.735C5.1695 20.632 4.97625 20.5237 4.13275 20.0497C3.5655 19.731 3.5005 19.7137 2.85725 19.7107C2.13525 19.7072 2.09225 19.753 2.09275 20.528C2.09275 20.9607 2.11025 21.143 2.1845 21.4942C2.235 21.7322 2.324 22.1625 2.38225 22.4503C2.4405 22.738 2.578 23.4035 2.68775 23.9293C2.87925 24.847 2.973 25.3027 3.46275 27.6992C3.5845 28.2942 3.71575 28.9192 3.75425 29.088C3.793 29.2567 3.85525 29.557 3.893 29.7555C3.9305 29.9538 4.117 30.871 4.30725 31.7938C4.4975 32.7163 4.79875 34.1773 4.97675 35.0405C5.15475 35.9035 5.35125 36.845 5.4135 37.1328C5.47575 37.4205 5.5475 37.7533 5.573 37.8723C5.66125 38.2828 6.17825 40.8315 6.2645 41.2815C6.31225 41.5295 6.365 41.7648 6.382 41.8045C6.399 41.8443 6.5875 42.7613 6.80075 43.8428C7.01425 44.924 7.21125 45.898 7.2385 46.0073C7.26575 46.1163 7.42825 46.8955 7.59925 47.7388C7.7705 48.582 7.963 49.5238 8.02725 49.8313C8.09125 50.1388 8.276 51.0397 8.4375 51.8332C8.599 52.627 8.749 53.3203 8.7705 53.3738C8.823 53.5043 9.1675 53.8263 9.287 53.8563C9.3395 53.8693 9.42925 53.927 9.4865 53.984C9.639 54.1368 9.82875 54.129 10.0287 53.9618C10.112 53.8923 10.2022 53.8355 10.2295 53.8355C10.2567 53.8355 10.3585 53.7665 10.456 53.6823C10.5532 53.5978 10.7202 53.454 10.8267 53.3628C10.9335 53.2713 11.2227 53.0198 11.4692 52.8035C11.7157 52.5875 11.9837 52.3543 12.0645 52.2853C12.1452 52.2165 12.5927 51.8267 13.0587 51.4195C13.5245 51.0122 14.0382 50.5652 14.2002 50.4265C14.362 50.2875 14.8492 49.8645 15.283 49.4863C19.139 46.123 23.1062 42.7878 23.1175 42.9L23.1287 43.0148L23.3782 42.7523C23.6395 42.4775 23.6652 42.4357 23.573 42.4357C23.5422 42.4357 24.0252 42.0012 24.6462 41.4702C25.2675 40.939 27.6055 38.9405 29.842 37.029C32.0782 35.1175 33.919 33.519 33.9325 33.477C33.9457 33.435 34.0033 33.357 34.06 33.304C34.2238 33.151 34.2045 32.9823 33.9878 32.6738C33.7555 32.3428 33.6198 32.267 32.8643 32.0458C32.473 31.9313 31.5997 31.664 31.223 31.5435C31.0442 31.4865 30.2942 31.2573 29.5562 31.034C28.295 30.6528 28.217 30.6245 28.2607 30.562C28.4905 30.2338 30.2305 28.4388 31.0245 27.7108C31.8717 26.9338 33.6517 25.4935 34.3435 25.0252C34.413 24.9782 34.5833 24.8577 34.7223 24.7575C35.0933 24.4895 35.9333 23.9345 36.3363 23.6908C36.873 23.3662 37.1237 23.217 37.3015 23.116C37.3907 23.0655 37.5045 23.0005 37.554 22.972C39.002 22.1352 40.7133 21.3225 42.316 20.71C43.2828 20.3407 45.0092 19.7635 45.725 19.5702C45.8045 19.5487 45.9668 19.505 46.0858 19.4727C46.205 19.4407 46.4078 19.39 46.5368 19.36C46.6658 19.33 46.8688 19.2822 46.9878 19.2542C47.4623 19.1422 48.0548 19.0187 48.4488 18.9497C48.677 18.9097 48.896 18.863 48.9358 18.8457C48.9755 18.8285 49.1378 18.7952 49.2965 18.772C49.4553 18.7485 49.6745 18.7157 49.7835 18.699C50.7355 18.5522 51.189 18.4935 51.8625 18.4297C55.7018 18.0672 59.625 18.3822 63.5823 19.3705C65.0733 19.743 67.4195 20.4952 68.29 20.88C68.3993 20.9282 68.667 21.0432 68.8853 21.1357C69.507 21.3992 70.4163 21.818 71.0673 22.1405C71.6173 22.4132 71.8428 22.5302 72.6913 22.9832C74.0423 23.7047 76.321 25.2297 77.7958 26.3995C77.9745 26.541 78.1693 26.694 78.2288 26.739C79.811 27.9393 82.754 30.9567 84.144 32.8038C84.241 32.9328 84.3425 33.0625 84.3698 33.0923C84.3968 33.122 84.5803 33.3655 84.7773 33.6335C84.9743 33.9013 85.207 34.218 85.2945 34.337C85.3823 34.456 85.5953 34.7645 85.7683 35.0223C86.2225 35.7003 86.1598 35.6538 86.618 35.6538C86.9148 35.6538 87.0145 35.6413 87.0485 35.6003C87.1293 35.503 87.588 35.2198 87.898 35.076L88.2035 34.9343V34.5413C88.2035 34.2123 88.1925 34.1343 88.136 34.0623C88.099 34.015 88.0058 33.8575 87.9288 33.7123C87.7048 33.2905 87.6405 33.1753 87.527 32.9933C87.4683 32.899 87.3438 32.692 87.2503 32.5333C87.1568 32.3745 87.0138 32.139 86.9325 32.01C86.851 31.8813 86.758 31.727 86.7255 31.6675C86.6673 31.5613 86.5138 31.3183 86.306 31.0043C86.2483 30.9173 86.1608 30.7845 86.111 30.709C86.0283 30.583 85.839 30.3075 85.3818 29.6472C85.2855 29.5082 85.1515 29.3215 85.0838 29.2323C85.0163 29.143 84.8828 28.9562 84.7875 28.8175C84.692 28.6785 84.492 28.4108 84.343 28.2223C84.1938 28.0338 84.0245 27.8145 83.9665 27.7353C83.4905 27.0835 82.0053 25.2988 81.4033 24.6555C80.1893 23.358 79.0983 22.2635 78.319 21.5612C78.19 21.445 77.9708 21.2437 77.832 21.1135C77.4743 20.779 77.1125 20.4642 76.5513 20.0005C76.2833 19.779 76.0318 19.57 75.9923 19.536C75.9125 19.4672 75.723 19.316 75.5628 19.1935C75.5053 19.1492 75.3998 19.0637 75.3283 19.003C75.2568 18.9422 75.0605 18.7912 74.8918 18.6675C74.723 18.5437 74.4635 18.3492 74.3145 18.235C74.1658 18.1207 73.8638 17.9027 73.6433 17.7505C73.4228 17.598 73.222 17.4487 73.197 17.4185C73.1718 17.3882 73.1365 17.3637 73.1183 17.3637C73.1 17.3637 72.9973 17.2987 72.89 17.2197C72.7828 17.1405 72.3735 16.863 71.9808 16.603C71.5878 16.3427 71.2223 16.0992 71.1685 16.0615C71.1148 16.0237 71.063 15.9927 71.0538 15.9927C71.0445 15.9927 70.9423 15.9305 70.8268 15.854C70.5355 15.6617 69.7663 15.2015 69.4625 15.038C69.3235 14.9632 69.0445 14.8065 68.8423 14.6897C68.1565 14.2942 66.7283 13.5722 65.4763 12.9882C64.698 12.625 64.4253 12.506 63.5463 12.145C63.328 12.0555 63.1188 11.9657 63.0815 11.946C63.044 11.926 62.9548 11.8882 62.883 11.8622C62.8113 11.836 62.5903 11.755 62.3918 11.682C62.031 11.5492 61.7728 11.4587 60.8585 11.144C60.3085 10.9547 59.2568 10.628 58.4778 10.4045C58.19 10.322 57.8753 10.2305 57.7783 10.2012C57.4458 10.101 55.854 9.71475 55.4793 9.6435C52.4613 9.06975 51.705 8.9625 48.7012 8.6815C48.1437 8.6295 43.4073 8.58125 42.6768 8.62025Z" 
                            />
                        </g>
                        <g id="Arrow2">
                            <path 
                                id="path0_3" 
                                style = {style2}
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M88.3187 47.097C88.2532 47.119 88.0112 47.3008 87.781 47.501C87.409 47.8245 85.8955 49.1438 84.9025 50.01C84.7042 50.1833 84.42 50.4265 84.2712 50.5508C84.1225 50.675 83.887 50.8793 83.7482 51.0048C83.6092 51.13 83.413 51.3028 83.312 51.3888C83.211 51.4745 82.9432 51.7078 82.7167 51.907C82.0765 52.471 80.629 53.738 80.1072 54.1913C79.848 54.4168 79.42 54.7903 79.1562 55.021C78.8927 55.252 78.5267 55.5708 78.343 55.7295C78.159 55.8883 77.687 56.3023 77.294 56.6493C76.901 56.9965 76.5272 57.3213 76.464 57.3708C76.4005 57.4205 76.166 57.6235 75.943 57.8218C75.7197 58.0203 75.518 58.1893 75.4942 58.1973C75.4705 58.2055 75.3457 58.3068 75.2175 58.4223C75.089 58.538 74.8942 58.6748 74.7845 58.7263C74.5845 58.8203 73.8967 59.472 73.934 59.5323C73.943 59.5473 73.7362 59.7473 73.4742 59.9768C72.926 60.457 71.7092 61.5223 70.997 62.1453C70.7285 62.3803 70.2092 62.8348 69.8435 63.1553C69.4777 63.4758 69.0462 63.8518 68.8847 63.9905C68.7232 64.1295 68.2757 64.5205 67.8905 64.8598C67.505 65.1988 67.0577 65.5885 66.8965 65.7255C66.45 66.105 65.89 66.596 65.5872 66.8735C65.4375 67.0105 65.23 67.1773 65.126 67.2438C64.909 67.3825 64.863 67.451 64.863 67.6358C64.863 67.7243 64.833 67.8035 64.7727 67.8753C64.6257 68.05 64.6477 68.215 64.8512 68.4623C65.064 68.7205 65.0812 68.729 65.8982 68.9733C66.6362 69.194 67.1797 69.358 67.7127 69.5213C67.9012 69.579 68.5507 69.7763 69.1557 69.9598C69.761 70.1433 70.2752 70.3038 70.2987 70.3168C70.3862 70.3645 68.858 71.9853 67.6947 73.0785C66.822 73.8988 65.146 75.2723 64.2575 75.8955C64.1727 75.955 64.0185 76.065 63.915 76.14C63.4425 76.4818 62.6595 77.0068 62.3737 77.1735C62.2645 77.2373 62.1022 77.3358 62.013 77.3928C61.7077 77.5875 60.6352 78.1953 59.8845 78.599C59.212 78.9605 57.7002 79.6805 57.233 79.862C56.995 79.9543 56.6865 80.0758 56.5475 80.132C56.4087 80.188 56.2057 80.2698 56.0967 80.3135C55.1985 80.6735 52.9737 81.3925 52.2185 81.567C52.0995 81.5945 51.9047 81.6405 51.7857 81.6695C51.0825 81.8398 49.5497 82.1515 49.062 82.2235C48.8935 82.2485 48.6255 82.2913 48.4667 82.3188C45.2977 82.8643 40.6802 82.7873 37.3737 82.1335C37.225 82.104 36.9002 82.0413 36.6522 81.994C35.7892 81.8295 33.9655 81.3758 33.4595 81.2C33.3802 81.1723 33.0962 81.082 32.8282 80.999C31.1917 80.4928 29.8332 79.9703 28.505 79.3365C28.26 79.2198 28.0537 79.124 28.0465 79.124C27.9445 79.124 25.516 77.8393 24.9097 77.4643C24.1227 76.9778 23.8588 76.8083 23.2175 76.3778C22.8225 76.1125 22.4553 75.863 22.4013 75.8233C22.3473 75.7835 22.224 75.695 22.1273 75.6265C21.8608 75.4375 21.0457 74.8243 20.7612 74.5985C20.6222 74.4883 20.468 74.37 20.4185 74.3358C19.471 73.6793 16.6235 70.8918 15.3475 69.3718C14.8515 68.7805 13.837 67.491 13.6355 67.1953C13.6063 67.1523 13.4605 66.951 13.3118 66.7478C13.163 66.5448 12.8865 66.1498 12.6978 65.87L12.3545 65.3615L11.9615 65.3513C11.59 65.3415 11.5635 65.3455 11.4753 65.4273C11.3068 65.5828 10.942 65.8088 10.654 65.9358L10.3715 66.0603L10.3613 66.4613C10.3525 66.8078 10.3605 66.8753 10.42 66.9595C10.4578 67.0133 10.5403 67.1545 10.6035 67.2735C10.8558 67.7488 11.4715 68.7895 11.959 69.5643C12.0608 69.726 12.493 70.3753 12.6805 70.6478C12.7598 70.7633 12.9155 70.9928 13.0265 71.158C13.1375 71.323 13.3195 71.58 13.431 71.7288C13.5425 71.8775 13.6953 72.0848 13.7703 72.1895C13.8455 72.294 14.0125 72.5173 14.1415 72.6858C14.2705 72.854 14.4733 73.123 14.5923 73.2833C14.7115 73.4438 14.8355 73.6043 14.868 73.64C14.9005 73.6758 15.1515 73.9868 15.4255 74.3313C15.6995 74.6758 15.984 75.0223 16.0575 75.1018C16.131 75.181 16.3338 75.4165 16.5078 75.6248C16.6818 75.8333 16.9388 76.1248 17.079 76.273C17.9338 77.1758 18.1887 77.439 18.776 78.0238C19.54 78.7848 19.9632 79.1908 20.508 79.6848C20.7257 79.8823 20.9287 80.0683 20.959 80.098C22.0685 81.19 25.8005 83.9685 27.6987 85.1155C27.8437 85.2033 28.071 85.3425 28.2037 85.425C28.704 85.7363 29.604 86.248 30.2717 86.6015C30.9127 86.9405 32.3097 87.645 32.5217 87.7358C32.6207 87.7783 32.8887 87.9018 33.117 88.0103C33.5365 88.2095 34.5185 88.648 34.5452 88.648C34.5532 88.648 34.791 88.747 35.074 88.868C35.6542 89.1165 35.9127 89.213 37.1392 89.639C38.397 90.076 39.4545 90.408 40.422 90.6703C41.056 90.842 42.4995 91.2105 42.6767 91.2458C42.766 91.2635 42.9932 91.3118 43.1817 91.3533C43.3702 91.3945 43.7925 91.475 44.1197 91.5323C44.4472 91.5893 44.7392 91.6448 44.769 91.6558C44.8575 91.6885 46.36 91.909 47.2582 92.0208C48.9492 92.2318 50.2162 92.3263 51.8037 92.36C54.7872 92.4238 57.488 92.3033 59.8125 92.0033C60.2585 91.9458 61.579 91.7413 61.8145 91.6933C61.9535 91.665 62.3267 91.5933 62.6442 91.5338C63.5227 91.369 64.9002 91.0688 65.6205 90.885C65.834 90.8305 66.186 90.7285 66.9192 90.5085C67.1472 90.44 67.4315 90.357 67.5505 90.3243C67.6695 90.2913 67.848 90.235 67.9472 90.199C68.0465 90.163 68.3062 90.0755 68.5245 90.0045C69.09 89.8205 69.4695 89.6885 69.9855 89.4963C70.2335 89.404 70.5745 89.279 70.7432 89.2185C70.9117 89.158 71.1227 89.072 71.212 89.027C71.3015 88.9823 71.561 88.877 71.7892 88.7935C72.45 88.551 73.217 88.2078 74.2062 87.712C75.2907 87.1685 76.5827 86.4928 76.6595 86.4285C76.6892 86.4038 76.7947 86.3405 76.894 86.288C77.3185 86.0635 78.238 85.5265 78.6442 85.266C78.8222 85.1518 79.045 85.0113 79.1395 84.9535C79.2337 84.8958 79.4705 84.7415 79.6652 84.6108C79.86 84.48 80.0817 84.3325 80.158 84.2828C80.3042 84.1878 80.442 84.0903 80.8462 83.7958C80.9825 83.6965 81.2732 83.4855 81.4922 83.3268C82.0275 82.939 82.8175 82.329 83.1992 82.0088C83.283 81.9388 83.473 81.7858 83.622 81.6688C83.8927 81.456 83.9717 81.3893 84.437 80.9785C84.574 80.8578 84.838 80.6318 85.0235 80.4768C85.5677 80.0215 86.7532 78.8698 87.762 77.8165C87.9852 77.5833 88.178 77.3925 88.1905 77.3925C88.2027 77.3925 88.3527 77.4718 88.5237 77.5685C88.6947 77.6655 88.9322 77.7978 89.0512 77.8628C89.1702 77.9278 89.4705 78.0945 89.7185 78.2335C90.6647 78.7638 91.6722 79.3265 92.28 79.6643C92.6272 79.8573 93.098 80.1205 93.326 80.2493C93.5542 80.3783 93.887 80.5615 94.0657 80.6568C94.2442 80.752 94.431 80.8568 94.4805 80.8898C94.53 80.9228 94.6762 81.0048 94.8052 81.0723L95.0397 81.195L95.6182 81.1968C96.2715 81.1988 96.3332 81.1798 96.4455 80.943C96.5362 80.7518 96.503 79.9475 96.3812 79.3948C96.3332 79.1765 96.211 78.592 96.1095 78.096C96.008 77.6 95.8597 76.8858 95.78 76.5088C95.5342 75.3468 95.166 73.5728 95.0765 73.1175C95.0295 72.8795 94.9327 72.4228 94.8615 72.1025C94.7902 71.7823 94.7002 71.352 94.6612 71.1465C94.5862 70.749 94.185 68.81 93.27 64.4235C93.1167 63.6895 92.9555 62.902 92.9115 62.674C92.8345 62.2753 92.6285 61.279 92.3145 59.788C92.2332 59.401 92.1047 58.784 92.029 58.417C91.9535 58.05 91.7517 57.076 91.581 56.2525C91.41 55.429 91.1562 54.2035 91.0165 53.5288C90.6537 51.7758 90.4522 50.812 90.3482 50.3363C90.276 50.0045 89.9012 48.2093 89.8022 47.7208C89.7667 47.5448 89.6995 47.44 89.5067 47.2598L89.325 47.0895L89.0617 47.0893C88.917 47.089 88.7175 47.0815 88.6182 47.0728C88.519 47.064 88.3842 47.0748 88.3187 47.097Z" 
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Pass
