import React from "react";
import {css, jsx} from "@emotion/react";

var Svg = ({ containerSize, ...props }) => (
  <svg
    css={css`
      float: right;
      position: absolute;
      width: 60%;
      left: 12%;
      top: 28%;
    `}
    {...props}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 464 78"
    enableBackground="new 0 0 1442.4 683.3"
  >
    <defs />
    <path
      fill="#222428"
      d="M21.2356 20.7262c1.6976 0 2.7573.1476 3.1738.4375.4164.2899.6273 1.0226.6273 2.1928 0 1.0331.3321 1.5444 1.0017 1.5444.2794 0 1.2125-.5271 2.7994-1.5866 1.1968-.8065 2.7257-1.4812 4.5761-2.0241 1.8505-.543 3.5323-.8171 5.0348-.8171 3.5375 0 6.7007 1.2282 9.4896 3.6793 2.1194 1.866 3.7589 4.2222 4.9293 7.0634 1.2231 2.9835 1.8399 6.1145 1.8399 9.4037 0 7.0212-2.3671 12.8037-7.1066 17.3421-3.6482 3.537-7.8026 5.3081-12.4525 5.3081-2.3671 0-4.808-.5587-7.3122-1.6709-.5009-.2214-.9068-.3321-1.2126-.3321-.8382 0-1.2547.8328-1.2547 2.509 0 2.1981.7381 3.79 2.2142 4.7652 1.3655.9171 2.1773 1.5392 2.4462 1.8607.2636.3215.3954.8539.3954 1.6077 0 1.671-.9331 2.9624-2.7994 3.8638-1.8663.9066-4.5023 1.3599-7.8975 1.3599-6.047 0-11.34005-1.2123-15.87925-3.6371-2.3144-1.2282-3.468981-2.7463-3.468981-4.5543 0-.8328.173971-1.4706.521923-1.9029.347948-.4322 1.022778-.8855 2.024458-1.3599 1.4498-.6695 2.33548-1.8818 2.6518-3.6371.3216-1.7553.56412-6.7945.73282-15.1282-.19506-6.8525-.44812-10.6952-.75389-11.5333-.11071-.2794-.27413-.4586-.47974-.543-.21088-.0843-.89626-.2372-2.06665-.4586-.89097-.1687-1.6185-.5798-2.17206-1.2334C.279398 32.5916 0 31.8061 0 30.8837c0-1.1122.390113-2.0979 1.17037-2.9466.78026-.8486 2.04555-1.6762 3.80112-2.488C11.804 22.355 17.2236 20.7842 21.2356 20.7262zm4.1385 15.7924l-.6273 11.4911c-.0264.4744-.0422.933-.0422 1.3811 0 .8644.3743 1.5602 1.1282 2.0873.7539.5271 1.7556.796 3.0103.796 3.8433 0 5.7676-3.1627 5.7676-9.4881 0-4.0957-.8066-6.979-2.4251-8.65-1.0017-1.0331-2.2037-1.5445-3.5955-1.5445-1.977 0-3.0525 1.3126-3.216 3.9271zM86.8929 20.4731c4.8503 0 8.9571 1.2282 12.3312 3.6793 1.7819 1.3126 3.0319 2.8095 3.7379 4.491.712 1.6868 1.065 4.0061 1.065 6.958l-.084 6.2252c0 4.3171.305 7.1161.917 8.397.306.6114.601 1.0015.875 1.1702.279.1687.865.3215 1.756.4586.891.137 1.339.7274 1.339 1.7553 0 1.3389-.538 2.7304-1.608 4.18-1.07 1.4496-2.457 2.6619-4.16 3.6371-2.088 1.2282-4.2754 1.8396-6.5635 1.8396-2.926 0-5.2403-1.0015-6.9379-3.0098-.5852-.7221-1.1282-1.0858-1.6291-1.0858-.5588 0-1.2969.3478-2.2142 1.0436-2.7889 2.0347-5.9469 3.052-9.4896 3.052-3.6483 0-6.6058-.7801-8.8623-2.3404-1.4761-1.0279-2.6465-2.372-3.5111-4.0324-.8646-1.6551-1.2969-3.3893-1.2969-5.2026 0-2.8992 1.1704-5.461 3.5111-7.6907 3.6483-3.5106 9.11-5.2764 16.3854-5.308 1.6132 0 2.6307-.1581 3.0525-.4797.4165-.3215.6274-1.0648.6274-2.235 0-2.9518-.3058-5.0919-.9174-6.415-.6115-1.323-1.6185-1.9872-3.0103-1.9872-.8382 0-1.5816.253-2.2353.7538-.6537.5007-1.4709 1.4232-2.4462 2.7568-2.4779 3.5369-5.0717 5.3081-7.7762 5.3081-1.3655 0-2.4779-.4059-3.3425-1.2124-.8646-.8065-1.2969-1.866-1.2969-3.1785 0-1.3389.5378-2.6725 1.608-4.0114 1.0702-1.3389 2.5305-2.509 4.3652-3.5106 5.0506-2.6672 10.3173-4.0061 15.8107-4.0061zm-2.8047 24.1947c-1.2283 0-2.2933.5007-3.1948 1.5023-.9068 1.0015-1.3602 2.198-1.3602 3.5949 0 1.3389.3216 2.4142.9595 3.2365.6432.8223 1.492 1.2334 2.5517 1.2334 2.23 0 3.3424-1.8818 3.3424-5.6401 0-1.5339-.1582-2.5618-.4798-3.0942-.3215-.5271-.9225-.8012-1.8188-.8328zM133.571 20.5153c1.392 0 3.664.3057 6.811.9172.644.1107 1.171.1687 1.587.1687.475 0 1.392-.253 2.758-.7538.643-.253 1.186-.3743 1.629-.3743 1.281 0 2.578.8223 3.885 2.4669 1.06 1.3073 1.924 2.7463 2.594 4.3066.669 1.5603 1.002 2.9097 1.002 4.0535 0 1.1175-.391 2.0399-1.171 2.7779s-1.755 1.107-2.926 1.107c-.975 0-1.845-.2372-2.609-.7117-.765-.4744-1.999-1.518-3.701-3.1363-1.782-1.7289-3.258-2.5934-4.429-2.5934-.78 0-1.455.2846-2.024.8539-.57.5693-.854 1.2493-.854 2.0242 0 1.3652 1.307 2.6461 3.927 3.8426 4.708 2.119 8.319 4.4278 10.824 6.9369 2.119 2.119 3.173 4.7071 3.173 7.775 0 3.8743-1.697 7.1055-5.098 9.6936-2.926 2.2561-6.505 3.3841-10.739 3.3841-1.086 0-3.063-.1792-5.936-.5429-2.704-.3058-4.223-.4586-4.555-.4586-.364 0-.78.0421-1.255.1265-.806.1107-1.391.1687-1.755.1687-1.308 0-2.341-.3321-3.095-1.0015-1.144-1.0332-2.204-2.6515-3.174-4.8706-.975-2.2139-1.46-4.1168-1.46-5.7034 0-2.5618 1.002-3.8427 3.01-3.8427.781 0 1.498.2583 2.151.7749.654.5166 2.025 1.8871 4.118 4.1168 1.144 1.2281 2.087 2.0662 2.841 2.5301.754.4586 1.561.6905 2.425.6905.918 0 1.656-.2425 2.215-.7327.559-.4849.838-1.1333.838-1.945 0-1.2546-1.07-2.3931-3.216-3.4263-4.486-2.1981-7.723-4.4699-9.716-6.8103-1.993-2.3404-2.989-5.0392-2.989-8.1071 0-3.3155 1.017-6.1725 3.052-8.5656 2.894-3.4262 6.848-5.1394 11.862-5.1394zM179.67 20.5153c1.391 0 3.664.3057 6.811.9172.643.1107 1.17.1687 1.587.1687.474 0 1.392-.253 2.757-.7538.643-.253 1.186-.3743 1.629-.3743 1.281 0 2.578.8223 3.886 2.4669 1.059 1.3073 1.924 2.7463 2.593 4.3066.67 1.5603 1.002 2.9097 1.002 4.0535 0 1.1175-.39 2.0399-1.17 2.7779-.78.738-1.756 1.107-2.926 1.107-.975 0-1.845-.2372-2.61-.7117-.764-.4744-1.998-1.518-3.701-3.1363-1.782-1.7289-3.258-2.5934-4.428-2.5934-.78 0-1.455.2846-2.025.8539-.569.5693-.854 1.2493-.854 2.0242 0 1.3652 1.308 2.6461 3.928 3.8426 4.708 2.119 8.319 4.4278 10.823 6.9369 2.12 2.119 3.174 4.7071 3.174 7.775 0 3.8743-1.698 7.1055-5.098 9.6936-2.926 2.2561-6.506 3.3841-10.739 3.3841-1.086 0-3.063-.1792-5.936-.5429-2.705-.3058-4.223-.4586-4.555-.4586-.364 0-.781.0421-1.255.1265-.807.1107-1.392.1687-1.756.1687-1.307 0-2.34-.3321-3.094-1.0015-1.144-1.0332-2.204-2.6515-3.174-4.8706-.975-2.2139-1.46-4.1168-1.46-5.7034 0-2.5618 1.001-3.8427 3.01-3.8427.78 0 1.497.2583 2.151.7749.654.5166 2.024 1.8871 4.117 4.1168 1.144 1.2281 2.088 2.0662 2.842 2.5301.754.4586 1.56.6905 2.425.6905.917 0 1.655-.2425 2.214-.7327.559-.4849.839-1.1333.839-1.945 0-1.2546-1.071-2.3931-3.216-3.4263-4.487-2.1981-7.724-4.4699-9.717-6.8103-1.992-2.3404-2.989-5.0392-2.989-8.1071 0-3.3155 1.018-6.1725 3.053-8.5656 2.889-3.4262 6.848-5.1394 11.862-5.1394zM257.115 54.9094l-4.307-6.8947c-1.001-1.5603-1.65-2.4933-1.945-2.799-.29-.3058-.675-.4586-1.149-.4586-1.002 0-2.035.9171-3.095 2.7568l-6.98 12.0341c-1.339 2.314-2.842 3.4684-4.513 3.4684-1.033 0-1.977-.3532-2.842-1.0648-.864-.7116-1.797-1.9134-2.799-3.616l-12.537-20.8527c-2.088-3.3683-3.722-5.5717-4.892-6.6048-.559-.4428-1.577-.8803-3.053-1.2967-.611-.195-1.123-.5798-1.523-1.1491-.406-.5693-.607-1.2071-.607-1.9029 0-2.1454 1.656-3.6477 4.972-4.5122 3.342-.8328 6.99-1.2545 10.95-1.2545 8.888 0 13.333 1.6552 13.333 4.9707 0 .6115-.433 1.5445-1.297 2.799-.169.253-.253.5166-.253.7959 0 .6115.653 2.1296 1.966 4.5543 1.45 2.7569 2.705 4.1379 3.759 4.1379.612 0 1.392-.6958 2.341-2.0874.949-1.3915 1.423-2.5196 1.423-3.384 0-.8645-.211-1.5551-.627-2.0664-.417-.5165-1.408-1.3283-2.968-2.4458-.949-.6694-1.424-1.4654-1.424-2.3825 0-2.1718 2.23-3.595 6.685-4.2644 2.705-.4165 5.879-.6273 9.527-.6273 4.207 0 7.243.3532 9.11 1.0648 1.866.7116 2.799 1.8607 2.799 3.4473 0 .6431-.111 1.1544-.332 1.5445-.221.3901-.822 1.0858-1.798 2.0874-.305.332-.458.7643-.458 1.2967 0 .7538.643 2.3404 1.924 4.7651 1.112 2.119 2.13 3.1785 3.052 3.1785 1.002 0 2.273-1.3494 3.801-4.0535 1.113-2.0347 1.672-3.3841 1.672-4.0535 0-.5271-.448-1.3494-1.339-2.4669-.644-.7802-.96-1.6288-.96-2.5513 0-1.4496.654-2.4511 1.967-3.0098 1.84-.8065 4.512-1.2124 8.024-1.2124 2.367 0 4.47.1792 6.31.5429 1.06.2214 1.924.6748 2.589 1.36.669.68 1.001 1.4707 1.001 2.3615s-.39 1.6446-1.17 2.256c-.142.1371-1.112.5272-2.926 1.1702-1.033.3901-1.882.9489-2.552 1.671-.669.7274-1.476 2.0189-2.425 3.8849L273.1 54.2715c-3.063 5.909-5.767 8.8609-8.108 8.8609-1.002 0-2.109-.6326-3.322-1.9029-1.191-1.2598-2.72-3.3683-4.555-6.3201zM321.977 20.4731c5.098 0 9.568 1.3231 13.417 3.9692 2.757 1.8924 4.971 4.3593 6.643 7.3955 1.729 3.1732 2.593 6.4888 2.593 9.9466 0 6.0461-2.773 11.1854-8.319 15.4182-5.293 4.0377-11.356 6.0618-18.178 6.0618-6.658 0-12.051-1.8923-16.174-5.6823-4.012-3.6792-6.021-8.4707-6.021-14.3744 0-6.5732 2.452-11.9497 7.355-16.1298 5.129-4.4014 11.356-6.6048 18.684-6.6048zm-3.343 9.6568c-1.228 0-2.209.4533-2.947 1.36-.738.9066-1.107 2.1084-1.107 3.616 0 1.6709.311 3.9481.938 6.8314.628 2.8834 1.371 5.4399 2.236 7.6696.864 2.2824 2.272 3.4262 4.223 3.4262 2.477 0 3.722-1.5761 3.722-4.723 0-2.3404-.311-5.0023-.939-7.9805-.627-2.9782-1.386-5.4029-2.277-7.2689-.923-1.9029-2.209-2.8781-3.849-2.9308zM372.462 20.7683c1.476 0 2.372.2109 2.694.6273.321.4164.606 1.7553.854 4.0114.137 1.2281.569 1.8396 1.297 1.8396.558 0 1.086-.4059 1.586-1.2124 2.231-3.4842 5.141-5.2237 8.736-5.2237 2.536 0 4.613.8223 6.226 2.4669.781.8065 1.424 1.8449 1.925 3.1153.501 1.2703.754 2.488.754 3.6582 0 1.3125-.306 2.6513-.918 4.0324-.611 1.381-1.407 2.5143-2.383 3.4052-1.782 1.6973-3.969 2.5512-6.563 2.5512-1.424 0-2.61-.253-3.575-.7538-.965-.5008-2.225-1.5181-3.78-3.052-.585-.5851-1.128-.875-1.629-.875-.78 0-1.286.4375-1.523 1.3178-.238.875-.354 2.7252-.354 5.5347 0 4.2064.153 7.0739.459 8.6078.195.8381.464 1.4127.817 1.7342.348.3216 1.091.6484 2.235.9805 2.51.7537 3.759 2.061 3.759 3.927 0 1.1438-.405 2.1401-1.212 2.9887-.807.8487-1.882 1.4127-3.216 1.6921-2.673.5587-6.606.8381-11.788.8381-4.93 0-8.678-.4323-11.24-1.2967-2.283-.7802-3.427-2.1296-3.427-4.0536 0-1.4495.838-2.7462 2.51-3.8848.806-.5271 1.365-1.0121 1.671-1.4443.305-.4322.516-1.0226.627-1.7764.443-2.5354.67-7.2267.67-14.0845 0-1.2545-.143-2.1507-.417-2.6936-.279-.5429-.838-.9804-1.671-1.3178-1.977-.7801-2.968-1.9081-2.968-3.3841 0-1.3388.68-2.4879 2.045-3.4473 1.366-.9593 3.649-1.9134 6.854-2.8622 4.286-1.2862 7.934-1.9398 10.945-1.9662zM452.037 8.43875V46.5914c0 2.1718.09 3.5686.275 4.1801.179.6115.69 1.2124 1.523 1.7975 1.002.6958 1.677 1.3072 2.025 1.8396.348.5271.522 1.1702.522 1.924 0 2.2297-2.241 3.927-6.727 5.0972-4.039 1.0331-8.082 1.5444-12.121 1.5444-.891 0-1.471-.1317-1.734-.3953-.264-.2636-.438-.9014-.522-1.9029-.143-1.4232-.643-2.1295-1.503-2.1295-.474 0-1.212.4164-2.214 1.2545-2.842 2.3141-6.005 3.4684-9.49 3.4684-4.317 0-8.208-1.6024-11.661-4.8073-2.035-1.924-3.68-4.1378-4.93-6.6469-1.671-3.2576-2.509-6.5626-2.509-9.9045 0-3.927 1.086-7.717 3.258-11.3647 2.009-3.3682 4.734-5.9616 8.193-7.7749 2.899-1.5023 5.752-2.2561 8.567-2.2561 3.232 0 6.131.7274 8.693 2.1717.417.2214.754.3321 1.002.3321.891 0 1.339-1.1966 1.339-3.5949 0-1.0279-.242-1.8186-.733-2.3615-.49-.5429-1.36-1.0121-2.609-1.4021-1.756-.5588-2.631-1.534-2.631-2.9256 0-2.0346 2.019-3.62123 6.063-4.76508 7.133-1.97668 11.909-2.96767 14.334-2.96767 2.388.01055 3.59 1.15438 3.59 3.4368zM429.341 29.4601c-1.813 0-3.247.9594-4.307 2.8834-1.423 2.5618-2.13 5.9353-2.13 10.1101 0 3.79.68 6.6417 2.046 8.5656.975 1.3916 2.299 2.0874 3.97 2.0874 1.808 0 3.126-1.0489 3.948-3.1574.823-2.1032 1.234-5.4926 1.234-10.1734 0-4.2907-.49-7.1477-1.46-8.5656-.749-1.1122-1.851-1.6973-3.301-1.7501z"
    />
    <path
      fill="#fff"
      d="M28.4899 15.7132c1.6976 0 2.7573.1476 3.1737.4375.4165.2899.6274 1.0226.6274 2.1928 0 1.0332.3321 1.5445 1.0017 1.5445.2794 0 1.2125-.5271 2.7994-1.5866 1.1968-.8065 2.7256-1.4812 4.5761-2.0242 1.8505-.5429 3.5323-.817 5.0348-.817 3.5375 0 6.7007 1.2282 9.4896 3.6793 2.1193 1.866 3.7589 4.2222 4.9293 7.0633 1.2284 2.9835 1.8399 6.1146 1.8399 9.4038 0 7.0211-2.3671 12.8036-7.1066 17.3421-3.6482 3.5369-7.8026 5.308-12.4525 5.308-2.3671 0-4.8081-.5587-7.3123-1.6709-.5008-.2214-.9068-.3321-1.2125-.3321-.8383 0-1.2547.8381-1.2547 2.5091 0 2.198.738 3.7899 2.2142 4.7651 1.3654.9172 2.1773 1.5392 2.4462 1.8607.2636.3215.3954.8539.3954 1.6077 0 1.671-.9332 2.9624-2.7994 3.8638-1.8663.9066-4.5023 1.3599-7.8975 1.3599-6.047 0-11.3401-1.2123-15.8793-3.6371-2.31438-1.2282-3.46895-2.7463-3.46895-4.5543 0-.8328.17397-1.4706.52192-1.9028.34795-.4323 1.02279-.8856 2.02973-1.36 1.4498-.6694 2.3355-1.8818 2.6518-3.6371.3216-1.7553.5641-6.7945.7328-15.1282-.195-6.8525-.4481-10.6952-.7539-11.5333-.1107-.2794-.2741-.4586-.4797-.543-.2056-.0843-.8963-.2372-2.0667-.4585-.89092-.1687-1.61846-.5799-2.17202-1.2335-.55883-.6536-.83826-1.439-.83826-2.3615 0-1.1122.39015-2.0979 1.1704-2.9465.78026-.8487 2.04548-1.6763 3.80108-2.488 6.8273-3.0942 12.2416-4.6703 16.2589-4.723zm4.1333 15.7924l-.6274 11.4911c-.0264.4744-.0422.933-.0422 1.3811 0 .8645.3743 1.5602 1.1282 2.0873.7539.5272 1.7556.796 3.0103.796 3.8433 0 5.7676-3.1627 5.7676-9.4828 0-4.0957-.8066-6.979-2.4251-8.65-1.0017-1.0331-2.2037-1.5445-3.5955-1.5445-1.977-.0052-3.0472 1.302-3.2159 3.9218zM94.1425 15.4602c4.8503 0 8.9575 1.2282 12.3315 3.6793 1.782 1.3125 3.031 2.8095 3.743 4.491.712 1.6868 1.065 4.0061 1.065 6.9579l-.085 6.2252c0 4.3171.306 7.1161.918 8.397.306.6115.601 1.0015.875 1.1702.279.1687.865.3215 1.755.4586.891.137 1.34.7274 1.34 1.7553 0 1.3389-.538 2.7305-1.608 4.18-1.076 1.4496-2.462 2.6619-4.16 3.6371-2.088 1.2282-4.276 1.8397-6.564 1.8397-2.926 0-5.24-1.0016-6.9376-3.0099-.5852-.7221-1.1282-1.0858-1.629-1.0858-.5588 0-1.2969.3479-2.2143 1.0436-2.7888 2.0347-5.9468 3.0521-9.4896 3.0521-3.6482 0-6.6058-.7802-8.8622-2.3404-1.4761-1.0279-2.6465-2.3721-3.5111-4.0325-.8646-1.6551-1.2969-3.3893-1.2969-5.2026 0-2.8991 1.1703-5.4609 3.5111-7.6906 3.6482-3.5106 9.11-5.2817 16.3854-5.3081 1.6132 0 2.6307-.1581 3.0525-.4797.4164-.3215.6273-1.0647.6273-2.2349 0-2.9519-.3057-5.0919-.9173-6.415-.6116-1.3231-1.6185-1.9872-3.0103-1.9872-.8382 0-1.5816.253-2.2353.7537-.6538.5008-1.4709 1.4232-2.4462 2.7568-2.4779 3.537-5.0717 5.3081-7.7762 5.3081-1.3655 0-2.4779-.4059-3.3425-1.2124-.8646-.8065-1.2969-1.866-1.2969-3.1732 0-1.3389.5378-2.6725 1.608-4.0114 1.0702-1.3388 2.5305-2.509 4.3652-3.5106 5.0505-2.6724 10.3173-4.0113 15.8054-4.0113zm-2.7994 24.1946c-1.2284 0-2.2933.5008-3.1948 1.5023-.9068 1.0015-1.3602 2.1981-1.3602 3.5949 0 1.3389.3216 2.4195.9595 3.2365.6432.8223 1.492 1.2335 2.5516 1.2335 2.2301 0 3.3425-1.8818 3.3425-5.6402 0-1.5339-.1582-2.5618-.4798-3.0941-.3216-.5272-.9278-.8065-1.8188-.8329zM140.826 15.5024c1.392 0 3.664.3057 6.811.9172.643.1107 1.171.1686 1.587.1686.475 0 1.392-.2477 2.757-.7537.644-.2531 1.187-.3743 1.629-.3743 1.282 0 2.578.8223 3.886 2.4669 1.06 1.3072 1.924 2.7463 2.594 4.3065.669 1.5603 1.001 2.9097 1.001 4.0536 0 1.1122-.39 2.0399-1.17 2.7778-.78.738-1.756 1.107-2.926 1.107-.975 0-1.845-.2372-2.615-.7116-.764-.4744-1.998-1.5181-3.701-3.1363-1.782-1.729-3.258-2.5935-4.428-2.5935-.78 0-1.455.2847-2.03.854-.569.5692-.854 1.2492-.854 2.0241 0 1.3652 1.307 2.6461 3.928 3.8427 4.708 2.119 8.319 4.4278 10.823 6.9368 2.119 2.119 3.174 4.7072 3.174 7.775 0 3.8743-1.698 7.1055-5.098 9.6936-2.926 2.2561-6.506 3.3841-10.739 3.3841-1.086 0-3.063-.1792-5.937-.5429-2.704-.3057-4.222-.4586-4.555-.4586-.363 0-.78.0422-1.254.1265-.807.1107-1.392.1687-1.756.1687-1.307 0-2.341-.3321-3.095-1.0015-1.144-1.0332-2.203-2.6514-3.173-4.8706-.976-2.2139-1.461-4.1168-1.461-5.7034 0-2.5618 1.002-3.8427 3.011-3.8427.78 0 1.497.2583 2.151.7749.653.5166 2.024 1.8871 4.117 4.1168 1.144 1.2282 2.088 2.0663 2.842 2.5301.754.4586 1.56.6906 2.425.6906.917 0 1.655-.2425 2.214-.7327.559-.485.838-1.1333.838-1.9451 0-1.2545-1.075-2.3931-3.216-3.4263-4.486-2.198-7.723-4.4699-9.716-6.8103-1.993-2.3404-2.989-5.0392-2.989-8.107 0-3.3156 1.017-6.1725 3.052-8.5657 2.9-3.4262 6.859-5.1393 11.873-5.1393zM186.925 15.5024c1.391 0 3.664.3057 6.811.9172.643.1107 1.17.1686 1.587.1686.474 0 1.392-.2477 2.757-.7537.643-.2531 1.186-.3743 1.629-.3743 1.281 0 2.578.8223 3.886 2.4669 1.059 1.3072 1.924 2.7463 2.593 4.3065.67 1.5603 1.002 2.9097 1.002 4.0536 0 1.1122-.39 2.0399-1.17 2.7778-.781.738-1.756 1.107-2.926 1.107-.976 0-1.845-.2372-2.615-.7116-.765-.4744-1.998-1.5181-3.701-3.1363-1.782-1.729-3.258-2.5935-4.429-2.5935-.78 0-1.455.2847-2.029.854-.57.5692-.854 1.2492-.854 2.0241 0 1.3652 1.307 2.6461 3.927 3.8427 4.708 2.119 8.32 4.4278 10.824 6.9368 2.119 2.119 3.173 4.7072 3.173 7.775 0 3.8743-1.697 7.1055-5.098 9.6936-2.926 2.2561-6.505 3.3841-10.739 3.3841-1.086 0-3.063-.1792-5.936-.5429-2.704-.3057-4.223-.4586-4.555-.4586-.364 0-.78.0422-1.255.1265-.806.1107-1.391.1687-1.755.1687-1.308 0-2.341-.3321-3.095-1.0015-1.144-1.0332-2.204-2.6514-3.174-4.8706-.975-2.2139-1.46-4.1168-1.46-5.7034 0-2.5618 1.002-3.8427 3.01-3.8427.781 0 1.498.2583 2.151.7749.654.5166 2.025 1.8871 4.118 4.1168 1.144 1.2282 2.087 2.0663 2.841 2.5301.754.4586 1.561.6906 2.425.6906.918 0 1.656-.2425 2.215-.7327.559-.485.838-1.1333.838-1.9451 0-1.2545-1.076-2.3931-3.216-3.4263-4.486-2.198-7.723-4.4699-9.716-6.8103-1.993-2.3404-2.99-5.0392-2.99-8.107 0-3.3156 1.018-6.1725 3.053-8.5657 2.9-3.4262 6.859-5.1393 11.873-5.1393zM264.364 49.8914l-4.307-6.8946c-1.002-1.5603-1.65-2.4933-1.945-2.799-.29-.3057-.675-.4586-1.15-.4586-1.001 0-2.035.9172-3.094 2.7568l-6.98 12.0341c-1.34 2.314-2.842 3.4684-4.513 3.4684-1.034 0-1.977-.3532-2.842-1.0648-.864-.7116-1.798-1.9134-2.799-3.616L224.197 32.465c-2.088-3.3683-3.722-5.5716-4.893-6.6048-.558-.4427-1.576-.8803-3.052-1.2967-.612-.195-1.123-.5798-1.524-1.1491-.406-.5693-.606-1.2071-.606-1.9029 0-2.1453 1.655-3.6476 4.972-4.5121 3.342-.8328 6.996-1.2545 10.95-1.2545 8.888 0 13.332 1.6604 13.332 4.9707 0 .6114-.432 1.5444-1.297 2.799-.168.253-.253.5165-.253.7959 0 .6115.654 2.1296 1.967 4.5543 1.45 2.7568 2.704 4.1378 3.759 4.1378.611 0 1.392-.6958 2.341-2.0873.949-1.3916 1.423-2.5197 1.423-3.3841 0-.8645-.211-1.555-.627-2.0663-.417-.5166-1.408-1.3283-2.968-2.4458-.949-.6695-1.424-1.4654-1.424-2.3826 0-2.1717 2.23-3.5949 6.685-4.2644 2.705-.4164 5.878-.6272 9.526-.6272 4.208 0 7.244.3531 9.111 1.0647 1.866.7116 2.799 1.8608 2.799 3.4474 0 .6431-.111 1.1544-.332 1.5444-.222.3901-.823 1.0859-1.798 2.0874-.306.3321-.459.7696-.459 1.2967 0 .7538.638 2.3404 1.925 4.7652 1.112 2.119 2.13 3.1732 3.052 3.1732 1.002 0 2.272-1.3494 3.801-4.0536 1.113-2.0346 1.671-3.384 1.671-4.0535 0-.5271-.448-1.3494-1.339-2.4669-.643-.7801-.959-1.6287-.959-2.5512 0-1.4496.654-2.4511 1.966-3.0098 1.84-.8065 4.513-1.2124 8.024-1.2124 2.367 0 4.471.1792 6.311.5429 1.06.2214 1.924.6747 2.594 1.36.669.6852 1.001 1.4706 1.001 2.3614 0 .8909-.39 1.6447-1.17 2.2561-.142.1423-1.112.5271-2.926 1.1702-1.033.3901-1.882.9488-2.552 1.671-.669.7274-1.476 2.0188-2.425 3.8848l-10.449 20.2255c-3.063 5.9089-5.767 8.8608-8.108 8.8608-1.002 0-2.109-.6326-3.321-1.9029-1.192-1.2493-2.721-3.3578-4.561-6.3149zM329.231 15.4602c5.098 0 9.568 1.3231 13.417 3.9692 2.757 1.8976 4.972 4.3592 6.643 7.3954 1.729 3.1733 2.594 6.4941 2.594 9.9467 0 6.0461-2.773 11.1854-8.32 15.4182-5.293 4.0377-11.356 6.0566-18.177 6.0566-6.659 0-12.052-1.8924-16.175-5.6824-4.012-3.6792-6.021-8.4707-6.021-14.3744 0-6.5732 2.452-11.9498 7.355-16.1298 5.124-4.3962 11.356-6.5995 18.684-6.5995zm-3.348 9.6515c-1.228 0-2.209.4533-2.947 1.36-.738.9066-1.107 2.1084-1.107 3.616 0 1.6709.311 3.9481.938 6.8314.628 2.8833 1.371 5.4398 2.236 7.6695.864 2.2825 2.272 3.4263 4.222 3.4263 2.478 0 3.723-1.576 3.723-4.7229 0-2.3404-.312-5.0024-.939-7.9806s-1.386-5.4029-2.277-7.2689c-.923-1.8976-2.204-2.8728-3.849-2.9308zM379.716 15.7554c1.476 0 2.372.2108 2.694.6272.321.4165.606 1.7553.854 4.0114.137 1.2282.569 1.8396 1.297 1.8396.559 0 1.086-.4058 1.587-1.2123 2.23-3.4843 5.14-5.2238 8.735-5.2238 2.536 0 4.613.8223 6.227 2.467.78.8064 1.423 1.8449 1.924 3.1152.501 1.2651.754 2.488.754 3.6582 0 1.3125-.306 2.6514-.918 4.0324-.611 1.3811-1.407 2.5144-2.383 3.4052-1.782 1.6973-3.969 2.5513-6.563 2.5513-1.424 0-2.61-.2531-3.575-.7538-.964-.5008-2.224-1.5181-3.78-3.052-.585-.5851-1.128-.875-1.629-.875-.78 0-1.286.4375-1.523 1.3178-.238.8802-.354 2.7251-.354 5.5347 0 4.2064.153 7.0739.459 8.6078.195.8328.464 1.4127.817 1.7342.348.3215 1.092.6483 2.236.9804 2.509.7538 3.759 2.0611 3.759 3.927 0 1.1439-.406 2.1401-1.213 2.9888-.807.8486-1.882 1.4127-3.216 1.692-2.673.5588-6.606.8381-11.788.8381-4.929 0-8.678-.4322-11.24-1.2966-2.283-.7802-3.427-2.1296-3.427-4.0536 0-1.4495.838-2.7462 2.51-3.8848.806-.5271 1.365-1.0121 1.671-1.4391.306-.4322.517-1.0226.627-1.7763.443-2.5355.67-7.2268.67-14.0846 0-1.2545-.143-2.1506-.417-2.6936-.279-.5429-.838-.9804-1.671-1.3178-1.977-.7801-2.968-1.9081-2.968-3.384 0-1.3389.68-2.488 2.045-3.4474 1.366-.9593 3.649-1.9134 6.854-2.8622 4.286-1.2915 7.934-1.9451 10.945-1.9714zM459.286 3.42626V41.579c0 2.1717.09 3.5685.274 4.18.18.6114.691 1.2123 1.524 1.7974 1.002.6958 1.677 1.3126 2.024 1.8397.348.5324.522 1.1702.522 1.924 0 2.2297-2.24 3.927-6.727 5.0972-4.038 1.0331-8.082 1.5444-12.12 1.5444-.891 0-1.471-.1318-1.735-.3953-.263-.2636-.437-.8961-.521-1.9029-.143-1.4232-.644-2.1295-1.503-2.1295-.474 0-1.212.4164-2.214 1.2545-2.842 2.314-6.005 3.4684-9.49 3.4684-4.318 0-8.208-1.6024-11.661-4.8073-2.035-1.924-3.68-4.1379-4.93-6.6417-1.671-3.2575-2.509-6.5625-2.509-9.9045 0-3.927 1.086-7.7169 3.258-11.3646 2.008-3.3683 4.734-5.9617 8.193-7.7697 2.899-1.5023 5.751-2.2561 8.567-2.2561 3.231 0 6.131.7275 8.693 2.1718.417.2214.754.332 1.002.332.891 0 1.339-1.1965 1.339-3.5949 0-1.0331-.243-1.8185-.733-2.3615-.49-.5429-1.36-1.012-2.61-1.4021-1.755-.5587-2.63-1.53391-2.63-2.9255 0-2.03467 2.019-3.62129 6.062-4.76513C448.494.990981 453.271 0 455.696 0c2.393 0 3.59 1.14384 3.59 3.42626zm-22.69 21.02144c-1.814 0-3.248.9593-4.308 2.8833-1.423 2.5618-2.13 5.9353-2.13 10.1101 0 3.7899.681 6.6416 2.046 8.5656.975 1.3916 2.299 2.0874 3.97 2.0874 1.808 0 3.126-1.0489 3.949-3.1521.822-2.1032 1.233-5.4979 1.233-10.1734 0-4.2907-.49-7.1424-1.46-8.5657-.754-1.1174-1.851-1.7025-3.3-1.7552z"
    />
  </svg>
);

export default Svg;
