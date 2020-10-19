require 'geocoder'

Handler = Proc.new do |req, res|
  city = req.location
  raise city.inspect
  res.status = 200
end