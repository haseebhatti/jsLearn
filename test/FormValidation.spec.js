describe('validate', function () {
  it('should validate true name', function () {
    expect(ck_name()).toEqual(true)
  });
  it('should validate true email', function () {
    expect(ck_email()).toEqual(true)
  });

  it('should validate true username'), function () {
    expect(ck_username()).toEqual(true);
  };
  it('should have capital letters in name', function () {
    expect(ck_name()).toEqual(true);


  });
  it('should have letters in email  ', function () {
    expect(validate.email()).toEqual(true);

  });

  it('should be a valid credit card ', function () {
    expect(ck_ccNumber()).toEqual();
