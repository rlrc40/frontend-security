const inputData = `<img src="" onError="javascript:alert('Very very malicious code')"/>`;

const SecureComponent = () => {
  return (
    <div className="secure-component">
        <h1>Secure component</h1>
        <p> { inputData } </p>
    </div>
  );
}

export default SecureComponent;