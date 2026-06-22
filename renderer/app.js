
function gen(){
  const v = document.getElementById('in').value;

  const out =
`这是一张真实摄影建筑室内照片（Nikon Z9拍摄）

场景描述：${v}

要求：
- 真实光影
- PBR材质
- 禁止CGI
- 禁止插画
- 100%摄影级真实感`;

  document.getElementById('out').innerText = out;
}
