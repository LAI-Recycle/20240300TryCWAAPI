//-------------�Ӥ��Y��-------------//
function showZoomedImage(img) {
    // �Ыة�j���Ϥ�����
    var zoomedImage = document.createElement("img");
    zoomedImage.src = img.src;
    zoomedImage.alt = "Zoomed Image";
    zoomedImage.style.maxWidth = "80%";
    zoomedImage.style.maxHeight = "80%";

    // �Ы��������s����
    var closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.style.color = "white";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "24px";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "20px";

    // �Ыخe������
    var zoomedImageContainer = document.createElement("div");
    zoomedImageContainer.style.display = "flex";
    zoomedImageContainer.style.justifyContent = "center";
    zoomedImageContainer.style.alignItems = "center";
    zoomedImageContainer.style.position = "fixed";
    zoomedImageContainer.style.top = "0";
    zoomedImageContainer.style.left = "0";
    zoomedImageContainer.style.width = "100%";
    zoomedImageContainer.style.height = "100%";
    zoomedImageContainer.style.background = "rgba(0, 0, 0, 0.5)";
    zoomedImageContainer.style.zIndex = "9999";

    // �N�����K�[��e����
    zoomedImageContainer.appendChild(zoomedImage);
    zoomedImageContainer.appendChild(closeButton);

    // �N�e���K�[�� body ��
    document.body.appendChild(zoomedImageContainer);

    closeButton.onclick = function () {
        // �����e��
        document.body.removeChild(zoomedImageContainer);
    };
    zoomedImageContainer.onclick = function (event) {
        if (event.target.tagName.toLowerCase() !== "img") {
            document.body.removeChild(zoomedImageContainer);
        }
    };
}
//-------------�Ӥ��Y�񵲧�-------------//